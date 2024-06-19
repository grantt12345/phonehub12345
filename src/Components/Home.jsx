import React, { useEffect, useState } from 'react';
import './Home.css';
import oppo from '../assets/oppo.jpg';
import samsung from '../assets/samsung.png';
import apple from '../assets/apple.jpg';
import Page from './Page';
const backgroundImages = [ oppo , samsung , apple ];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home" style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }}>

      <h2 >Welcome to PhoneHUB</h2>
      <p className="glow">Phonehub is the world's leading free phone site</p>
   
      
    </div>
  );
};

export default Home;