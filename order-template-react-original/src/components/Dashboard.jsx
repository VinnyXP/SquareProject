import { useState } from "react";

export default function Dashboard() {



    return (
        <>
            <Link>Orders to Be Packed</Link>
            <Link>Orders to Be Delivered</Link>
            <Link>Reports</Link>
            <Link to="/InventoryPage">Inventory in Hand</Link>
            <Link to="/InventoryPage">Inventory Log</Link>
        </>
    )



}