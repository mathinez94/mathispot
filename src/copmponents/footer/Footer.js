import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaInstagram, FaTwitter, FaTelegramPlane, FaWhatsapp, FaUserNinja } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='footerContainer'>
       <div className='socials'>
        <FaInstagram className='icon'/>
        <FaTwitter className='icon'/>
        <FaTelegramPlane className='icon'/>
        <FaWhatsapp className='icon'/>
       </div>
       <div className="footer logo">
            <FaUserNinja className='footer-logo'/>
            <Link to='/' ><span className='footer-logo-text'>MathiSpot</span></Link> 
        </div>
       <div className='text'>
        <p>all rights reserved @2023</p>
       </div>
    </div>
  )
}

export default Footer