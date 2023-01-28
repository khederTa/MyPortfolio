import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessageLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

import  { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0yc02bt', 'template_nc2saz8', form.current, 'kiwAftWBCF-Q_wRfh')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container conatct__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>khdertaleb1@gmail.com</h5>
            <a href="mailto:khdertaleb1@gmail.com" target='_blank' rel='noreferrer noopener'>Send a message</a>
          </article>

       {/*   <article className="contact__option">
            <RiMessageLine className='contact__option-icon' />
            <h4>Messanger</h4>
            <h5>Kheder Taleb</h5>
            <a href="https://m.me/kheder.taleb" target='_blank' rel='noreferrer noopener'>Send a message</a>
          </article>*/}

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsA|pp</h4>
            <h5>+963996275091</h5>
            <a href="https://api.whatsapp.com/send?phone+963996275091" target='_blank' rel='noreferrer noopener'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
