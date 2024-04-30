// date , product , quantity 
// Including things that are coming in. 

import React from 'react';

class ShipmentInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            product: '',
            quantity: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // onChange will be used to update the state of the component
    // will essentially be used to update the shipment info
    render() {
        return (
            <div>
                <label>Date:
                    <input type="date" name="date" onChange={this.handleInputChange} />
                </label>
                <label>Product:
                    <input type="text" name="product" onChange={this.handleInputChange} />
                </label>
                <label>Quantity:
                    <input type="number" name="quantity" onChange={this.handleInputChange} />
                </label>
            </div>
        );
    }
}

export default ShipmentInfo;