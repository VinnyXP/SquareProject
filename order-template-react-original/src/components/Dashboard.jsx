import { useState } from "react";

export default function Dashboard() {



    return (
        <>
            <Link to="/OrdersToBePacked">Orders to Be Packed</Link>
            <Link to="/OrdersToBeDelivered">Orders to Be Delivered</Link>
            <Link>Reports</Link>
            <Link to="/InventoryPage">Inventory in Hand</Link>
            <Link to="/InventoryPage">Inventory Log</Link>
        </>
    )



}