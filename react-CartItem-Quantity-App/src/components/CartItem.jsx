import React from "react";
import "./CartItem.css";
const CartItem = ({ item, updateItem }) => {
  return (
    <div className="cart-item">
      <h3 className="item-title">{item.name}</h3>

      <p className="item-quantity">Quantity: {item.quantity}</p>
      <p className="item-price">Price: {item.price}</p>

      <button
        className="btn btn-increase"
        onClick={() => updateItem(item.id, "quantity", item.quantity + 1)}
        disabled={item.quantity === 10}
      >
        ➕
      </button>
      <button
        className="btn btn-decrease"
        onClick={() => updateItem(item.id, "quantity", item.quantity - 1)}
        disabled={item.quantity === 0}
      >
        ➖
      </button>
      <div style={{ marginTop: "10px" }}>
        <label>Enter Price: </label>
        <input
          type="number"
          value={item.price}
          onChange={(e) => updateItem(item.id, "price", Number(e.target.value))}
        />
      </div>
      <p style={{ marginTop: "10px" }}>
        Item Total: ₹{item.quantity * item.price}
      </p>
    </div>
  );
};

export default CartItem;
