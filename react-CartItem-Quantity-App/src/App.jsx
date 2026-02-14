import React from 'react'
import { useState } from 'react'
import CartItem from './components/CartItem';
import './App.css'
const App = () => {
 const [cartItems, setCartItems] = useState([
    { id: 1, name: "iPhone", quantity: 0 ,price:0},
    { id: 2, name: "Laptop", quantity: 0 ,price:0},
  ]);

  const updateItem = (id, field, value) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, [field]: Math.max(value, 0) }
          : item
      )
    );
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="app-container">
      <h1 className="app-title">Cart System 🛒</h1>

      <h2 className="total-items">
        Total Items: {totalItems}
      </h2>
      <h2 className="total-price">
        Total Price: ₹{totalPrice}
      </h2>

      {cartItems.map((item) => (
        <CartItem
         key={item.id}
          item={item}
          updateItem={updateItem}
        />
      ))}
    </div>
  )
}

export default App
