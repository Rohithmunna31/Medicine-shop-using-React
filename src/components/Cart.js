// src/components/Cart.js
import React from 'react';
import './Cart.css';
import { useCart } from './cartContext';

const Cart = ({ onClose }) => {
  const { cart, removeFromCart, getTotalQuantity, getTotalAmount } = useCart();

  const handleOrder = () => {
    alert("Order placed!");
    onClose();
  };

  return (
    <div className="cart">
      <button className="close-cart-button" onClick={onClose}>Close Cart</button>
      <div className="cart-list">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="cart-detail">
              <span>{item.medicineName}</span>
              <span>{item.description}</span>
              <span>{item.price}</span>
              <span>{item.quantity}</span>
            </div>
            <button className="remove-from-cart-button" onClick={() => removeFromCart(item.medicineName)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <strong>Total Quantity: {getTotalQuantity()}</strong>
        <strong>Total Amount: ${getTotalAmount().toFixed(2)}</strong>
      </div>
      <button className="order-button" onClick={handleOrder}>Order</button>
    </div>
  );
};

export default Cart;
