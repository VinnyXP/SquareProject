// contain info about product info componets  
// product name, inventory, quantity 

import React from 'react';
import ProductInfo from './ProductInfo';



// add function to whatever item gets increased or decreased, will be API call to update the inventory
// Solution I found online for updating inventory , could be used in this component if accepted

/* updateInventory = (product, quantity) => {
    // API call to update the inventory
    // This is a placeholder, replace with API call
    fetch('your-api-url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            product: product,
            quantity: quantity
        }),
    })
    .then(response => response.json())
    .then(data => {
        // Update the state with the new inventory data
        this.setState({ products: data });
    })
    .catch((error) => {
        console.error('Error:', error);
    });
} */

class InventoryPage extends React.Component {
// props contains any data passed to it from a parent component    
// ?can we just use item instead of product? since item is already useed in the Item component?

    constructor(props) {
        super(props);
        this.state = {
            // will set the template for what will be displayed on inventory page
            // will pass through from product and quantity
            // Can we get this from the API instead of hardcoding it?

            // Products = API/DataBase call
        };
    }

    render() {
        return (
            <div>
            /* API call to get the inventory */
                {this.state.products.map((product, index) => (
                    <ProductInfo key={index} product={product.name} quantity={product.quantity} />
                ))}
            </div>
        );
    }
}

export default InventoryPage;