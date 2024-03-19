import React, { useState, useEffect } from 'react';
import { FaAlignJustify, FaAnglesUp } from "react-icons/fa6";
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';

import './Header.css'

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [homeOpen, setHomeOpen] = useState(false);
  const homeRoute = "/";
  const location = useLocation();

  function toggleHamburger() {
    setHamburgerOpen(!hamburgerOpen)
  };

  useEffect(() => {
    if (location.pathname === homeRoute) {
      setHomeOpen(true);
    } else {
      setHomeOpen(false);
    }
  }, [location.pathname, homeRoute])

  return (
    <>
      <header className='page-header'>
        <nav className='navbar' style={{ display: `${hamburgerOpen ? 'flex' : 'none'}` }}>
          <ul className='secondary-nav' style={{ display: `${homeOpen ? 'flex' : 'none'}` }}>
            <li><Link to="home" smooth duration={500} className='scroll-link' onClick={toggleHamburger}><FaAnglesUp /></Link></li>
            <li><Link to="about" smooth duration={500} className='scroll-link' onClick={toggleHamburger}>ABOUT</Link></li>
            <li><Link to="resume" smooth duration={500} className='scroll-link' onClick={toggleHamburger}>RESUMÉ</Link></li>
            <li><Link to="projects" smooth duration={500} className='scroll-link' onClick={toggleHamburger}>PROJECTS</Link></li>
            <li><Link to="footer" smooth duration={500} className='scroll-link' onClick={toggleHamburger}>LINKS</Link></li>
          </ul>

          <div className='navbar-separator' style={{ display: `${homeOpen ? 'flex' : 'none'}` }}></div>
          
          <ul className='primary-nav'>
            <li><NavLink to="/" className='navlink' onClick={toggleHamburger}>HOME</NavLink></li>
            <li><NavLink to="resume" className='navlink' onClick={toggleHamburger}>FULL RESUMÉ</NavLink></li>
          </ul>
        </nav>

      </header>
      <div className='menuToggle' onClick={toggleHamburger}><FaAlignJustify /></div>
    </>
  )
}

export default Header