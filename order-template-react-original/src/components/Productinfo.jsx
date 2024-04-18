// will set the template for what will be displayed on inventory page 
// will pass through from product and quantity 
import React from 'react';

const ProductInfo = ({ product, quantity }) => {
    return (
        <div className="product-card">
            <h2>{product}</h2>
            <p>Quantity: {quantity}</p>
        </div>
    );
};

export default ProductInfo;