export default function OrderInfo({ product, quantity, restaurantName }) {



    return (
        <>
            <div>
                <h1>{restaurantName}</h1>

                <p>Product: {product}</p>

                <p>Quantity {quantity}</p>

            </div>
        </>
    )
}