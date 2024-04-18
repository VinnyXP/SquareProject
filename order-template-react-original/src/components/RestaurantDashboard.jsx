import { useState } from "react";
// will contain a bunch of order info componets 
// API database call that will matchup with restaunt anme ion current section
// Should be personalized to each restaurant 

export default function RestaurantDashboard({ restaurantName }) {

return (
    <>
     <Link to="/OrderForm">Order Form</Link>
     <Link to="/Orderhistory">Order History</Link>
    </>
);

}