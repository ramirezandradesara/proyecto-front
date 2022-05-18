import React from 'react'
import './Footer.css'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className='footer-copyrights'>
          <p>©2021 Digital Booking</p>
        </div>

        <div className='footer-social-media'>
          <BsFacebook />
          <FaLinkedinIn />
          <BsTwitter />
          <BsInstagram />
        </div>
      </div>
    </footer>
  )
}

export default Footer