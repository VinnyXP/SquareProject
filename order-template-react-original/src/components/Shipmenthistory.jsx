// act as an order history just like client side
// will display products that have been shipped, and products that have came in 
// will contain shipment info components 

import React from 'react';
import ShipmentInfo from './ShipmentInfo';

class ShipmentHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // API DATA Call - shipments
            // initilized as empty array
            shipments: [],
        };
    }

    componentDidMount() {
        // fetch shipment data from API or other sources
        // this is just a placeholder , should be replaced with actual data fetching !! (API call)
        this.setState({
            shipments: [
                // hardcoded sample of the data
                { id: 1, product: 'Product 1', status: 'Shipped', date: '2022-01-01' },
                { id: 2, product: 'Product 2', status: 'Delivered', date: '2022-01-02' },
            ],
        });
    }

    render() {
        return (
            <div>
                <h2>Shipment History</h2>
                // API call to get the shipment history
                // Should I use shipment or product parameter?
                {this.state.shipments.map((shipment) => (
                    <ShipmentInfo key={shipment.id} shipment={shipment} />
                //  <ShipmentInfo key={shipment.id} product={shipment.product} status={shipment.status} date={shipment.date} /> ???
                //  same question, should I use shipment or product parameter? can i reuse something from the shipmentinfo component?
                ))}
            </div>
        );
    }
}

export default ShipmentHistory;