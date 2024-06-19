import React from 'react';
import './FormPopup.css';

const FormPopup = ({ show, handleClose, service }) => {
  if (!show) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    handleClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Reserve {service.name}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:&nbsp;
            <input type="text" name="name" required />
          </label>
          <label>
            Email:&nbsp;  
            <input type="email" name="email" required />
          </label>
          <label>
            Phone:&nbsp;
            <input type="tel" name="phone" required />
          </label>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default FormPopup;
