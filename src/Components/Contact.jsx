import React from 'react';
import './Contact.css';
import { useState } from 'react';
import image from  '../assets/background.webp';
const Contact = () => {
    const [modal,setModal] = useState(false);
    const[data, setData] = useState({
        name: "",
        email: "",
        feedback: ""
    });
    const handleChange = e => {
        const { name, value} = e.target;
        setData({...data, [name]:value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(data)
    }
  return (
    <div className="contact" style={{ backgroundImage:`url(${image})` }}>
    <div >
        
      <h2>Contact Us</h2>
      <p>Email: phonehub@gmale.com  Phone: 09123456789</p>
      <p>Phone: 09123456789</p>
      <p>Website : PhoneHub.com</p>
      
    </div>
   {!modal &&
<button className ="btn btn-red close-btn" onClick={()=> setModal((value)=>!value)}>
     Toggle Feedback Form
</button>
   }
    <div>
        {modal && 
        <form className="feedback" onSubmit={handleSubmit}>
            
            <button className="xx"onClick={()=> setModal((value)=>!value)}> X </button>
            <h1>Give your Feedback</h1>
            <div className="m1-rem">
            <input placeholder="Name" name="name " onChange={(e) => handleChange(e)}/>
            </div>
            <div>
            <input placeholder="Last Name" name="lastname " onChange={(e) => handleChange(e)}/>
            </div>
            <div >
            <input  className="fbd" placeholder="Feedback" name="feedback" onChange={(e) => handleChange(e)}/>
            </div>
            <button className='btnfd' onClick={handleSubmit}>Submit feedback</button>
        </form>}
    </div>
    </div>

  );
};

export default Contact;



