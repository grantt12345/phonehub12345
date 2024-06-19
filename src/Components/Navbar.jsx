import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import hub from '../assets/hub.jpg';

const Navbar = () => {
  // const[click,setClick] = useState(false);
  // const handleClick = () => setClick(!click);
  // const closeMobileMenu= ()=> setClick(false);

  return (
   <>
    <nav className="navbar">
    
      <ul className="nav-links">
        <Link to="/" className="logo">Phone<img src={hub} alt="hub" className="logo-container" /></Link>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/phonesection">Phone Section</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      


    </nav>
   </>
  )
}

export default Navbar



// import React from 'react'

// import './Navbar.css'
// import hub from '../assets/hub.jpg';
// const Navbar = () => {
//   return (
//     <div>
      
//       <header className="header">
//       <a  href="/" className="logo">Phone<img src={hub} alt="hub" className="logo-container" /></a>

//       <nav className="navbar">
//       <a href="/">Home</a>
//       <a href="/">Serv</a>
//       <a href="/">asd</a>
//       </nav>
//       </header>
//     </div>
//   )
// }

// export default Navbar

{/* <nav className="navbar">
<div className="navbar-container">
<Link to="/" className="navbar-logo">
  Phone<i className='fab fa-typo3'/>
</Link>
<div className="menu-icon" onClick={handleClick}>
  <i className={click ? 'fas fa times' : 'fas fa-bars'} />
</div>
<ul className={click ? 'nav-menu-active' : 'nav-menu'}>
  <li className="nav-item">
    <Link to='/services' className="nav-links" onClick={closeMobileMenu}>Services</Link>
  </li>
  <li className="nav-item">
    <Link to='/' className="nav-links" onClick={closeMobileMenu}>Home</Link>
  </li>
  <li className="nav-item">
    <Link to='/' className="nav-links" onClick={closeMobileMenu}>SignUp</Link>
  </li>
 </ul> 
</div>
</nav> */}