import React from 'react'
import CV from '../../assets/resume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
      <a href='https://docs.google.com/document/d/1-35IUWsSKirALQAE9MopNMS3gzULakkBueeoT7hbelY/edit?usp=sharing' download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
