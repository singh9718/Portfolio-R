import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll';


const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">Client</Link>
        </div>
        <button className="desktopMenubtn">
          <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>
      </nav>
    </div>
  )
}

export default Navbar
