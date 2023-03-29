import React from 'react'
import './about.css'
import Me from '../../assets/kh.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" height="100%" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p> 
             
As a software engineer with extensive experience, I am passionate about solving complex problems using the latest technologies. My expertise lies in developing web applications, and I am proficient in several programming languages and frameworks such as HTML5, CSS3, JavaScript (ES6, ES7), React.js, Node.js, and Python. In addition, I have a deep understanding of machine learning and deep learning technologies, including TensorFlow and Keras.
Throughout my career, I have worked with diverse teams of developers, where I have developed excellent communication and problem-solving skills that have enabled me to drive successful project outcomes. I believe in staying up-to-date with the latest trends in software engineering and machine learning, and I am always looking for ways to enhance my knowledge to deliver innovative and cutting-edge solutions.
Overall, I am an enthusiastic and dedicated software engineer who is ready to take on new challenges, learn new technologies, and deliver innovative solutions.






 


</p>
          <a href="#content" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section >
  )
}

export default About
