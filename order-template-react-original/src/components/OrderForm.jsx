import { useState } from "react";
import Item from './Item';


export default function OrderForm() {
    const [items, setItems] = useState([]);

    const handleAddItem = () => {
        setItems([...items, { product: "", quantity: 0 }]);
    };

    const handleItemChange = (index, newItem) => {
        const newItems = [...items];
        newItems[index] = newItem;
        setItems(newItems);
    };

    function handleSubmit(e) {
        e.preventDefault();
        // DB/API call here to deal with the data
    }

    const deleteItem = (index) => {
        console.log('deleting for some reason');
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div id="form-container">
                {items && items.map((item, index) => (
                    <div className="outside-item-container">
                        <Item
                            key={index}
                            index={index}
                            item={item}
                            onChange={handleItemChange}
                        />
                        <button className="delete-button" type="button" onClick={() => deleteItem(index)}>Remove Product</button>
                    </div>
                ))}
                <button className="addItem" type="button" onClick={handleAddItem}>Add Item</button>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}