import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../img/logo.png'

import '../styles/Navbar.css';

function Navbar(){
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_navbar");
  }

  return(
    <header>
      {/* <img 
        className='nav-logo'
        src={Logo}
      /> */}
      <h3>Logo</h3>
      <nav ref={navRef}>
        <a href='#'>Home</a>
        <a href='#'>My work</a>
        <a href='#'>Blog</a>
        <a href='#'>About me</a>
        <button
          className='nav-btn nav-close-btn'
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>
      <button
        className='nav-btn'
        onClick={showNavbar}
      >
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;