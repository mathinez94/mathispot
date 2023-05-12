import React from 'react'
import "./Navbar.css"
import { NavLink,Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
           <Link><p>MathiSpot</p></Link> 
        </div>  
        <nav className='navlinks'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/stories'>Stories</NavLink>
            <NavLink to='/predictions'>Predictions</NavLink>
            <NavLink to='/livescore'>Livescore</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </nav>  
    </div>
  )
}

export default Navbar