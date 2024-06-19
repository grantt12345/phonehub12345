import React from 'react';
import './PhoneSection.css';
import iphonexr from '../assets/pic.jpg';
import iphone13 from '../assets/pic2.jpg';
import iphone14 from '../assets/pic3.jpg';
import Page from './Page';
const services = [
    { id: 1, name: 'iPhone XR', price: '$600', description: 'Matteblack case', image: iphonexr },
    { id: 2, name: 'iPhone 13', price: '$799', description: 'Matteblack case', image: iphone13 },
    { id: 3, name: 'iPhone 14', price: '$1059', description: 'Skyblue case, latest version', image: iphone14 },
];

import a60 from '../assets/a60.webp';
import a96 from '../assets/a96.webp';
import a98 from '../assets/a98.webp';

const oppo = [
  { id: 1, name: 'OPPO A60', price: '$2999', description: 'Wifi Sucker', image: a60 },
  { id: 2, name: 'OPPO A96', price: '$459', description: 'Dual Sim', image: a96 },
  { id: 3, name: 'OPPO A98', price: '$309', description: 'Good for ML', image: a98 },
];
import sgs24 from '../assets/sgs24.webp';
import sgs24plus from '../assets/sgs24plus.webp';
import sgs24ultra from '../assets/sgs24ultra.webp';

const samsung = [
  { id: 1, name: 'Samsung Galaxy S24', price: '$500', description: 'DirtyWhite case', image: sgs24 },
  { id: 2, name: 'Samsung Galaxy S24Plus', price: '$699', description: 'Matteblack case', image: sgs24plus},
  { id: 3, name: 'Samsung Galaxy S24Ultra', price: '$859', description: 'GrayCase, latest version', image: sgs24ultra },
];
  
const PhoneSection = ({ onReserve }) => {
  return (
    <div>
    <div className="services">
      <h2>iPhone Section</h2>      
      <div className="service-list">
        {services.map(service => (
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
    <div className="services">
      <h2>Oppo Section</h2>      
      <div className="service-list">
        {oppo.map(service => (
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
    <div className="services">
      <h2>Samsung Section</h2>      
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
<Page/>
    </div>
  );
};

export default PhoneSection;


    {/* <h2>Samsung Section</h2>
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
      </div> */}

      {/* <h2>Oppo Section</h2>
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
      </div> */}