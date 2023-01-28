import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
    {/*<article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
          </ul>
        </article>*/}
        {/* END OF UX/UI */}

        <article className="service">
          <div className="service__head">
            <h3>Front-End Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Design and develop user interfaces for web applications using React.js.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Implement interactive features using React components, Redux, and other libraries.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Create custom reusable React components and integrate them into existing applications.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Optimize application performance by implementing best practices in code structure and design.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>
                 Develop responsive web designs that are compatible with multiple browsers and devices.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>
                 Troubleshoot and debug issues related to React applications.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                  Collaborate with back-end developers to integrate APIs into the front-end of the application.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                  Utilize version control systems such as Git to manage code changes.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF Front-End DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Back-End Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                 Developing RESTful APIs: I have experience in developing RESTful APIs using Node.js, Express, and MongoDB.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Database Design and Implementation: I have experience in designing and implementing databases using MongoDB, and MySQL.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Authentication and Authorization: I have experience in implementing authentication and authorization using JWT tokens, OAuth2, and Passport.js.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Security: I have experience in implementing security measures such as encryption, access control lists (ACLs), rate limiting, and input validation to protect applications from malicious attacks.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Performance Optimization: I have experience in optimizing the performance of Node.js applications by utilizing caching techniques such as Redis or Memcached, as well as utilizing profiling tools to identify bottlenecks in the codebase.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Deployment: I have experience in deploying Node.js applications to cloud providers such as AWS or Heroku using CI/CD pipelines with tools such as Jenkins or Travis CI.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF Back-End */}
      </div>
    </section>
  )
}

export default Services
