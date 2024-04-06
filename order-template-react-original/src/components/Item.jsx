import { useState } from "react"


export default function Item({ index, item, onChange }) {
    const handleproductChange = (e) => {
        const newItem = { ...item, product: e.target.value };
        onChange(index, newItem);
    }

    const handleQuantityChange = (e) => {
        const newItem = { ...item, quantity: parseInt(e.target.value) }
        onChange(index, newItem);
    }

    return (
        <div className="item-container">
            <label>Item</label>
            <select value={item.product} onChange={handleproductChange}>
                <option value="Orange">Orange</option>
                <option value="Banana">Banana</option>
                <option value="Apple">Apple</option>
            </select>
            <label>Quantity</label>
            <input type="number"
                value={item.quantity}
                onChange={handleQuantityChange}
            />
        </div>
    )
}