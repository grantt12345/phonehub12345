import React, { useState } from 'react';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import PhoneSection from './Components/PhoneSection';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import FormPopup from './Components/FormPopup';
import Iphone from './Components/Iphone';
import Samsung from './Components/Samsung';
// import Page from './Components/Page';
// import PhoneSection from './Components/PhoneSection';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
const App = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleReserve = (service) => {
    setSelectedService(service);
  };

  const handleClosePopup = () => {
    setSelectedService(null);
  };
  return (
   
    <>
     <Router>
     <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phonesection" element={<PhoneSection onReserve={handleReserve} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>  
      {selectedService && (
          <FormPopup show={true} handleClose={handleClosePopup} service={selectedService} />
        )}

      <Footer />
      
      </Router>
    </>
    
  )
}

export default App  
