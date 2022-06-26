import React from 'react'
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = ({name, redirect}) => {
  return (
    <div className='nav'>
        <div className='nav-left'>
          <img className='logo' src={Logo} alt="Logo"/>
        </div>
        <div className='nav-right'>
          <button className='navBtn'><Link className='link' to={redirect}>{name}</Link></button>
        </div>
      
    </div>
  )
}

export default Navbar
