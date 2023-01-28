import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo' target='_blank' rel='noreferrer noopener'></a>
      

      <ul className="permalinks">
        <li><a href="#" rel='noreferrer noopener'>Home</a></li>
        <li><a href="#about" rel='noreferrer noopener'>About</a></li>
        <li><a href="#experience" rel='noreferrer noopener'>Experience</a></li>
        <li><a href="#services" rel='noreferrer noopener'>Services</a></li>
        <li><a href="#portfolio" rel='noreferrer noopener'>Portfolio</a></li>
     {/*   <li><a href="#testimonials" rel='noreferrer noopener'>Testimonials</a></li>*/}
        <li><a href="#contact" rel='noreferrer noopener'>Contact us</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/kheder-taleb" target="_blank" rel='noreferrer noopener'><BsLinkedin /></a>
        <a href="https://github.com/khederTa" target="_blank" rel='noreferrer noopener'><FaGithub /></a>
        
      </div>

      <div className="footer__copyrights">
        <small>&copy; Kheder Taleb. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
