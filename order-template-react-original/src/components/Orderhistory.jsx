import OrderInfo from "./OrderInfo";

export default function Orderhistory({ restaurantName }) {

    /*
    An API/DB call will need to be made here in order to determine the content of the orders
    to render , using the restaurantName
    */

    return (
        <>
            <div>
                {this.state.orders.map((order, index) => (
                    <OrderInfo key={index} product={order.product} quantity={order.quantity} restaurantName={restaurantName} />
                    // insert Button to be able to make another order of this exact type
                ))}
            </div>
        </>
    )

}