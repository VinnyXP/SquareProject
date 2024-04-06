const express = require('express');
const app = express();
const port:number = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

//endpoint to display the mcurrent inventory of the buisness
app.get('/getInventory', (req, res) => {
    //
});

//endpoint to add a new truck order to the inventory

app.post('/addTruckOrder', (req, res) => {
    //
});

//endpoint to add a new customer order to the inventory and manage with square 
//sends back a itemized receipt
app.post('/addCustomerOrder', (req, res) => {
    //
});

//endpoint to display past orders of the buisness
//displays all past orders order ids, customer name, and total price
app.get('/getPastOrders', (req, res) => {
    //
});

//gets the details of a specific order given the order id
app.get('/getOrderDetails', (req, res) => {
    //
})

//returns an invoic for a specific order given the order id
app.get('/getInvoice', (req, res) => {
    //
})

//adds a customer to the database
app.post('/addCustomer', (req, res) => {
    //
})

//gets all customers in the database
app.get('/getCustomers', (req, res) => {
    //
})

//endpoint to get all the orders of a specific customer given customer id shows order id, total price, date, and status
app.get('/getCustomerOrders', (req, res) => {
    //
})

//use to update the status of an order given the order id from pending to packed to delivered to paid
app.post('/updateOrderStatus', (req, res) => {
    //
})

//cancels an order given the order id
app.post('/cancelOrder', (req, res) => {
    //
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

