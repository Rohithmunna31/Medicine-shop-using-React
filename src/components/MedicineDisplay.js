import React, { useState, useEffect } from 'react';
import './MedicineDisplay.css';
import { useCart } from './cartContext';

const MedicineDisplay = ({ submissions }) => {
  const { addToCart } = useCart();
  const [medicines, setMedicines] = useState(submissions);

  useEffect(() => {
    setMedicines(submissions);
  }, [submissions]);

  const handleRemove = (medicineName, removeQuantity) => {
    setMedicines(prevMedicines => 
      prevMedicines.map(medicine => 
        medicine.medicineName === medicineName 
          ? { ...medicine, quantity: Math.max(0, medicine.quantity - removeQuantity) }
          : medicine
      )
    );
  };

  return (
    <div className="medicine-display">
        <h2> Available Medicines </h2>
      {medicines.map((medicine, index) => (
        <div key={index} className="medicine-item">
          <span>{medicine.medicineName}</span>
          <span>{medicine.description}</span>
          <span>{medicine.price}</span>
          <span>{medicine.quantity}</span>
          <input 
            type="number" 
            min="1" 
            max={medicine.quantity} 
            defaultValue="1"
            id={`quantity-${index}`}
          />
          <button 
            onClick={() => {
              const quantity = Number(document.getElementById(`quantity-${index}`).value);
              if (quantity > 0 && quantity <= medicine.quantity) {
                addToCart({ ...medicine, quantity });
                handleRemove(medicine.medicineName, quantity);
              }
            }}
          >
            Add to Cart
          </button>
          <button 
            onClick={() => {
              const quantity = Number(document.getElementById(`quantity-${index}`).value);
              handleRemove(medicine.medicineName, quantity);
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default MedicineDisplay;
