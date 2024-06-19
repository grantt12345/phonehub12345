import React from 'react';
import { useState } from 'react';
import Iphone from './Iphone';
import Samsung from './Samsung';
import PhoneSection from './PhoneSection';
import hub from '../assets/hub.jpg';
import  './Page.css';
const Page = () => {

const [showMore, setShowMore] = useState(false);

function handleMoreClick() {
        setShowMore(!showMore);
      }

      
      
  return (
    <div className='page'>
    <div className="btns">
  
    <button className = "bts" onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} Best Selling Phones in Phone<img src={hub} alt="hub" className="logohub" />
    </button>
      {showMore && <Iphone />}


  
     

   

    </div>

 
    </div>
    
  );
};

export default Page;
