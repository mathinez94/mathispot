import React from 'react'
import "./Navbar.css"
import { NavLink, Link } from 'react-router-dom'
import {FaUserNinja} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='navbar'>
         <div className="logo">
            <FaUserNinja className='logo-logo'/>
               <Link to='/' ><span className='logo-text'>MathiSpot</span></Link> 
            </div>
            <nav >
                <NavLink to='/' className='navlinks'>Home</NavLink>
                <NavLink to='/stories' className='navlinks'>Stories</NavLink>
                <NavLink to='/predictions' className='navlinks'>Predictions</NavLink>
                <NavLink to='/livescore' className='navlinks'>Livescore</NavLink>
                <NavLink to='/about' className='navlinks'>About</NavLink>
                <NavLink to='/contact' className='navlinks'>Contact</NavLink>
            </nav>
    </div>
    // MEDIA SCREEN

  )
}

export default Navbar