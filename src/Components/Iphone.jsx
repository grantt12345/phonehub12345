import React from 'react';
import './PhoneSection.css';
import a96 from '../assets/a96.webp';
import iphone14 from '../assets/pic3.jpg';
import sgs24ultra from '../assets/sgs24ultra.webp';

const services = [
  { id: 1, name: 'OPPO RENO A96', price: '$459', description: 'Dual Sim', image: a96 },
  { id: 2, name: 'iPhone 14', price: '$1059', description: 'Skyblue case, latest version', image: iphone14 },
  { id: 3, name: 'Samsung Galaxy S24Ultra', price: '$859', description: 'GrayCase, latest version', image: sgs24ultra },
];

const Iphone = () => {
  return (
    <div>
    <div className="services">
      <h2>Samsung Section</h2>      
      <div className="service-list">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.name} className="service-image" />
            <h3>{service.name}</h3>
            <p>{service.price}</p>
            <p>{service.description}</p>
           
          </div>
          
        ))}

      </div>
    </div>
  
    </div>
  );
};

export default Iphone;


   