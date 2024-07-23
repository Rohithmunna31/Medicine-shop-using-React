import React, { useState } from 'react';
import './MedicineForm.css';
import MedicineDisplay from './MedicineDisplay';
import Cart from './Cart';

const MedicineForm = () => {
  const [medicineName, setMedicineName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [submissions, setSubmissions] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newSubmission = {
      medicineName,
      description,
      price: Number(price), 
      quantity: Number(quantity), 
    };

    setSubmissions([...submissions, newSubmission]);
    setMedicineName('');
    setDescription('');
    setPrice('');
    setQuantity('');
  };

  const toggleCart = () => {
    setShowCart(prevShowCart => !prevShowCart);
  };

  return (
    <div>
      <div className="header">
        <button className="cart-button" onClick={toggleCart}>Cart</button>
      </div>
      <form onSubmit={handleSubmit} className="medicine-form">
        <input
          type="text"
          value={medicineName}
          onChange={(e) => setMedicineName(e.target.value)}
          placeholder="Medicine Name"
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
          required
        />
        <button type="submit">Add</button>
      </form>

      <MedicineDisplay submissions={submissions} />

      {showCart && <Cart onClose={toggleCart} />}
    </div>
  );
};

export default MedicineForm;
