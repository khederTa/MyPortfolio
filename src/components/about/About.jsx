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
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
                As a software engineer, I have a passion for developing innovative solutions to complex problems. I specialize in developing web applications and mobile applications using the latest technologies such as HTML5, CSS3, JavaScript (ES6, ES7), Java, React.js, Node.js, and Python. I also have extensive experience in machine learning and deep learning technologies such as TensorFlow and Keras.

I am highly motivated to stay up-to-date with the latest trends in software engineering and machine learning. I am always eager to learn new technologies and apply them to my projects. My goal is to create efficient and robust solutions that can help businesses reach their goals faster.

I am an excellent communicator with strong problem-solving skills. I have worked on several projects with teams of developers from different backgrounds, which has enabled me to develop my interpersonal skills as well as my technical abilities. 

I am confident that my knowledge and experience will be an asset to any organization looking for a software engineer who is passionate about technology and eager to learn new things.
          </p>
          <a href="#content" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section >
  )
}

export default About
