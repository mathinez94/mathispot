import React from 'react'
import './Contact.css'
import { FaInstagram, FaTwitter, FaTelegramPlane, FaWhatsapp, FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='contact'>
     <Link><div className='contact-icons'><FaInstagram className='icons'/><p>Instagram</p></div></Link> 
      <Link><div className='contact-icons'><FaTelegramPlane className='icons'/><p>Telegram</p></div> </Link>
      <Link><div className='contact-icons'><FaTwitter  className='icons'/><p>Twitter</p></div></Link> 
      <Link  to='https://wa.me/2348104849150' target='blank'><div className='contact-icons'><FaWhatsapp className='icons'/><p>Whatsapp</p></div></Link>
      <Link><div className='contact-icons'><FaFacebook className='icons'/><p>Facebook</p></div></Link>
    </div>
  )
}

export default Contact