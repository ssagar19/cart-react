import React from "react";
const CartItem = ({ id, name, price, qty, updateQty }) => {
    return (
        <div className="CartItem">
            <div>{name}</div>
            <div> $ {price}</div>
            <div>
                <button onClick={() => updateQty(id, qty - 1)}>-</button>
                {qty}
                <button onClick={() => updateQty(id, qty + 1)}>+</button>
            </div>
            <div>Total: ${qty * price}</div>
        </div>
    );
};

export default CartItem;
