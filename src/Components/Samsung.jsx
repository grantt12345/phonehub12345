import React from 'react';
import './PhoneSection.css';
import a60 from '../assets/a60.webp';
import a96 from '../assets/a96.webp';
import a98 from '../assets/a98.webp';

const samsung = [
  { id: 1, name: 'OPPO A60', price: '$2999', description: 'Wifi Sucker', image: a60 },
  { id: 2, name: 'OPPO A96', price: '$459', description: 'Dual Sim', image: a96 },
  { id: 3, name: 'OPPO A98', price: '$309', description: 'Good for ML', image: a98 },
];

const Samsung = ({ onReserve }) => {
  return (
    <div>
    <div className="services">
      <h2>Oppo Section</h2>      
      <div className="service-list">
        {samsung.map(service => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.name} className="service-image" />
            <h3>{service.name}</h3>
            <p>{service.price}</p>
            <p>{service.description}</p>
            <button onClick={() => onReserve(service)}>Reserve</button>
          </div>
          
        ))}

      </div>
    </div>
  


    </div>
  );
};

export default Samsung;


   