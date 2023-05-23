import React from 'react'
import './Contact.css'
import { FaInstagram, FaTwitter, FaTelegramPlane, FaWhatsapp, FaUserNinja, FaFacebook } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='contact'>
      <FaInstagram className='contact-icons'/><p>Instagram</p>
      <FaTelegramPlane className='contact-icons'/><p>Telegram</p>
      <FaTwitter className='contact-icons'/><p>Twitter</p>
      <FaWhatsapp className='contact-icons'/><p>Whatsapp</p>
      <FaFacebook className='contact-icons'/><p>Instagram</p>
    </div>
  )
}

export default Contact