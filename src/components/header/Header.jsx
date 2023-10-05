import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello my name is</h5>
        <h1>Kheder Taleb</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me"  width="800" height="400" />
        </div>

        <a href="#contact" className='scroll__down' rel='noreferrer noopener'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
