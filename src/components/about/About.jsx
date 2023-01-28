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
              As a software engineer am passionate about developing innovative solutions to complex problems.

              I specialize in web and mobile applications using HTML5, CSS3, JavaScript (ES6, ES7), Java, React.js, Node.js, and Python. 

              I also have experience in machine learning and deep learning technologies such as TensorFlow and Keras.

              I have strong problem-solving skills and excellent communication skills from working on projects with teams of developers from different backgrounds. 

              I'm motivated to stay up-to-date with the latest trends in software engineering and machine learning and I am confident my knowledge and experience will be an asset to any organization.
          </p>
          <a href="#content" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section >
  )
}

export default About
