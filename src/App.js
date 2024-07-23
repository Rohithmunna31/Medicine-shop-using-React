// src/App.js
import React, { useState } from 'react';
import MedicineForm from './components/MedicineForm';
import Cart from './components/Cart';
import { CartProvider } from './components/cartContext';
import './App.css'; // Import your main CSS file

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <CartProvider>
      <div className="app">
        <header>
          <button className="cart-button" onClick={toggleCart}>Cart</button>
        </header>
        <MedicineForm />
        {showCart && <Cart onClose={toggleCart} />}
      </div>
    </CartProvider>
  );
};

export default App;
