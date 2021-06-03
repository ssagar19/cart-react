import React, { useState } from "react";
import CartItem from "./CartItem";
import "./Card.css";

const Cart = ({ initialItems }) => {
    const [items, setItems] = useState(initialItems);
    const grandTotal = items
        .reduce((total, item) => {
            return total + item.qty * item.price;
        }, 0)
        .toFixed(2);

    function updateQty(id, newQty) {
        const newItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, qty: newQty };
            }
            return item;
        });
        setItems(newItems);
    }
    return (
        <div className="Cart">
            <h1>I AM CART</h1>
            <div className="Cart-items">
                {items.map((item) => {
                    return (
                        <CartItem
                            updateQty={updateQty}
                            key={item.id}
                            {...item}
                        />
                    );
                })}
            </div>
            <h2>Grand total : ${grandTotal}</h2>
        </div>
    );
};

export default Cart;
