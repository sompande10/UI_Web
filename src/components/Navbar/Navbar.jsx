import React from 'react'
import './navbar.css'
import logo from '../../assets/mount.png'

const Navbar = () => {
  return (
    <div className='navbar_section'>
      <div className='navbar__logo'>
          <img src={logo} alt="" />
        </div>
      
      <nav className='navbar__content'>
            <p><a href="#Home">Home</a></p>
            <p><a href="#Home">About</a></p>
            <p><a href="#Home">Contact</a></p>
            <p><a href="#Home">Gallery</a></p>
            <button>Signup</button>
      </nav>
      
      </div>
  )
}

export default Navbar