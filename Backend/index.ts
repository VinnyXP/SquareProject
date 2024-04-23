const express = require('express');
const app = express();
const port:number = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
const client = new MongoClient(process.env.MONGO_URI);
client.connect();
const inventoryDB= client.db('inventory');
const customersDB = client.db('customers');

//endpoint to display the mcurrent inventory of the buisness
app.get('/getInventory', (req, res) => {
    
    
});
let example =
{"item":
{
    "name": ""
},
"initialInventory":""
}

app.post('/addItem', (req,res) => {
    let item = req.data.item;
    let initialInventory= req.data.initialInventory;
    let date= new Date();
    inventoryDB.createCollection(`${item.name}`)
    inventoryDB.collection(`${item.name}`).insertOne({
        "transactionType": "Inventory",
        "inventory": initialInventory,
        "holdingInventory": 0,
    })
    inventoryDB.collection(`${item.name}`).insertOne({
        "transactionType": "initial",
        "quantity": initialInventory,
        "date": date
    })
    res.send("Item added to inventory")
})



//endpoint to add a new truck order to the inventory
let exampledata= [{
    "item": {
                "name": ""
            },
    "quantity": ""
},
{
    "item": {
                "name": ""
            },
    "quantity": ""
},
{
    "item": {
                "name": ""
            },
    "quantity": ""
}
]
app.post('/addTruckOrder', (req, res) => {
    let date = new Date();
    let data = req.data;
    data.forEach((item: any) => {
        inventoryDB.collection(`${item.name}`).findOne({"transactionType": "InventoryCount"}, (err: any, result: any) => {
            if (err) {
                console.log(err);
            }
            result.inventory += item.quantity;
        });
    });


    data.forEach((item: any) => {
        inventoryDB.collection(`${item.name}`).insertOne({
            "transactionType": "TruckOrder",
            "quantity": item.quantity,
            "date": date
        });
    });
    res.send("Truck order added to inventory")
});

//endpoint to add a new customer order to the inventory and manage with square 
//sends back a itemized receipt

//order data should be in the form of
let exampleorder= {
    "customer": {
        "name": ""
    },
    "items": [{
        "item": {
            "name": ""
        },
        "quantity": ""
    },
    {
        "item": {
            "name": ""
        },
        "quantity": ""
    },
    {
        "item": {
            "name": ""
        },
        "quantity": ""
    }
    ]
}
app.post('/addCustomerOrder', (req, res) => {
    const date = new Date();
    let order = req.data;
    let total = 0;
    customersDB.collection(`${order.customer.name}`).insertOne({
        "transactionType": "CustomerOrder",
        "items": order.items,
        "date": date,
        "status": "Pending",
        "orderID": Math.floor(Math.random() * 1000000),
    });
    order.items.forEach((item: any) => {
        inventoryDB.collection(`${item.name}`).findOne({"transactionType": "InventoryCount"}, (err: any, result: any) => {
            if (err) {
                console.log(err);
            }
            if (result.inventory < item.quantity) {
                res.send("Not enough inventory");
            }
            result.inventory -= item.quantity;
            result.holdingInventory += item.quantity;
        });
    });
});

app.post('/shipOrder', (req, res) => {
    let customer = req.data.customer;
    let orderID = req.data.orderID;
    customersDB.collection(`${customer.name}`).findOne({"orderID": orderID}, (err: any, result: any) => {
        if (err) {
            console.log(err);
        }
        result.status = "Packed";
        result.items.forEach((item: any) => {
            inventoryDB.collection(`${item.name}`).findOne({"transactionType": "InventoryCount"}, (err: any, result: any) => {
                if (err) {
                    console.log(err);
                }
                result.holdingInventory -= item.quantity;
            });
        });
    })
});


//endpoint to display past orders of the buisness
//displays all past orders order ids, customer name, and items ordered
app.get('/getPastOrders', (req, res) => {
    let orders: { orderID: any; customer: any; items: any; }[] = [];

    customersDB.listCollections().toArray((err: any, collections: any) => {
        if (err) {
            console.log(err);
        }
        collections.forEach((collection: any) => {
            customersDB.collection(collection.name).find({"transactionType": "CustomerOrder"}).toArray((err: any, result: any) => {
                if (err) {
                    console.log(err);
                }
                result.forEach((order: any) => {
                    orders.push({
                        "orderID": order.orderID,
                        "customer": order.customer.name,
                        "items": order.items
                    });
                });
            });
        });
    });
});

//gets the details of a specific order given the order id
app.get('/getOrderDetails', (req, res) => {
    let orderID = req.data.orderID;
    customersDB.listCollections().toArray((err: any, collections: any) => {
        if (err) {
            console.log(err);
        }
        collections.forEach((collection: any) => {
            customersDB.collection(collection.name).findOne({"orderID": orderID}, (err: any, result: any) => {
                if (err) {
                    console.log(err);
                }
                res.send(result);
            }
            );
        }
        );
    }
    );
})

//returns an invoic for a specific order given the order id
app.get('/getInvoice', (req, res) => {
    //
})

//adds a customer to the database
app.post('/addCustomer', (req, res) => {
    customersDB.createCollection(`${req.data.name}`);
})

//gets all customers in the database
app.get('/getCustomers', (req, res) => {
    customersDB.listCollections().toArray((err: any, collections: any) => {
        if (err) {
            console.log(err);
        }
        res.send(collections);
    });
});

//endpoint to get all the orders of a specific customer given customer id shows order id, date, and status
app.get('/getCustomerOrders', (req, res) => {
    customersDB.collection(`${req.data.customer}`).find({"transactionType": "CustomerOrder"}).toArray((err: any, result: any) => {
        if (err) {
            console.log(err);
        }
        let orders: { orderID: any; date: any; status: any; }[] = [];
        result.forEach((order: any) => {
            let total = 0;
            order.items.forEach((item: any) => {
                total += item.price * item.quantity;
            });
            orders.push({
                "orderID": order.orderID,
                "date": order.date,
                "status": order.status
            });
        });
        res.send(orders);
    });
});

//use to update the status of an order given the order id from pending to packed to delivered to paid
app.post('/updateOrderStatus', (req, res) => {
    let orderID = req.data.orderID;
    let status = req.data.status;
    customersDB.listCollections().toArray((err: any, collections: any) => {
        if (err) {
            console.log(err);
        }
        collections.forEach((collection: any) => {
            customersDB.collection(collection.name).findOne({"orderID": orderID}, (err: any, result: any) => {
                if (err) {
                    console.log(err);
                }
                result.status = status;
            });
        });
    });
});

//cancels an order given the order id
app.post('/cancelOrder', (req, res) => {
    let orderID = req.data.orderID;
    customersDB.listCollections().toArray((err: any, collections: any) => {
        if (err) {
            console.log(err);
        }
        //first add the inventory back to the inventory
        collections.forEach((collection: any) => {
            customersDB.collection(collection.name).findOne({"orderID": orderID}, (err: any, result: any) => {
                if (err) {
                    console.log(err);
                }
                result.items.forEach((item: any) => {
                    inventoryDB.collection(`${item.name}`).findOne({"transactionType": "InventoryCount"}, (err: any, result: any) => {
                        if (err) {
                            console.log(err);
                        }
                        result.inventory += item.quantity;
                        result.holdingInventory -= item.quantity;
                    });
                });
            });
        });
        collections.forEach((collection: any) => {
            customersDB.collection(collection.name).deleteOne({"orderID": orderID});
        });
    });
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


