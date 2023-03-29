import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: "https://th.bing.com/th/id/OIP.bBveFtIuwGY-bdCqCMmZtQHaE8?pid=ImgDet&rs=1",
    title: 'TED Web Scraping And Classification Video By Its Transcript Using Machine Learning',
    github: 'https://github.com/khederTa/Ted-Web-Scraping-And-Classification-Videos',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: "https://th.bing.com/th/id/OIP.7J7nVH4LeNwwBbSbw44UFQHaFj?w=235&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    title: 'Sign Language Recognition Using Deep Learning ASL',
    github: 'https://github.com/khederTa/Sign-language-recognition-using-deep-learning-ASL',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: "https://th.bing.com/th/id/OIP.lIOSK0S3LcDq9DzCo4fjyQHaEE?w=287&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    title: "Logistic Regression Classifier To Recognize Cats",
    github: 'https://github.com/khederTa/logistic-regression-classifier-to-recognize-cats',
    demo: 'https://github.com'
  },
  {
    id: 4,
    image: 'https://th.bing.com/th?id=OIP.tDu-vQE9VA_Cp3wYMSw_jwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2',
    title: 'Book Online Store MERN Stack',
    github: 'https://github.com/khederTa/book-online-store-MERN-stack',
    demo: 'https://github.com'
  },
  {
    id: 5,
    image: "https://th.bing.com/th/id/OIP.aQjlwxDUtFwQ_hAOLDbBFwHaE8?w=268&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    title: 'Food Delivery System MVC',
    github: 'https://github.com/khederTa/Food_delivery_system',
    demo: 'https://github.com'
  },
  {
    id: 6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0hKafRVjPI0tPkEPVAhy-krdK_BaJE9eUlKP8Qo9&s",
    title: 'E-Commerce MERN Stack',
    github: 'https://github.com/khederTa/E-Commerce-MERN-Stack',
    demo: 'https://github.com'
  },

  {
    id: 7,
    image: "https://th.bing.com/th/id/R.2342ddf33fceccf54ce9b0e5e30f78f4?rik=YQJoHoAH%2bh9asA&pid=ImgRaw&r=0",
    title: 'Share Memories Social Media Application',
    github: 'https://github.com/khederTa/Share-Memories-Social-Media-Application',
    demo: 'https://github.com'
  },
  {
    id: 8,
    image: "https://th.bing.com/th/id/OIP.cSayzj8fteFzob5v_VSIwAHaEK?pid=ImgDet&rs=1",
    title: 'Real time Chat Application',
    github: 'https://github.com/khederTa/Real-time-Chat-Application',
    demo: 'https://github.com'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel='noreferrer noopener'>Github</a>
                 {/* <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer noopener'>Live Demo</a>*/}
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio
