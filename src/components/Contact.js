import React from 'react'
import main from '../images/main.jpg'
import Title from './Title'

const Contact = () => {
  return (<>
    <section className="section" id="contact">
  <Title title="contact" subTitle="us"/>
  <div className="section-center contact-center">
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="Enter the subject of your message" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Enter your message" required></textarea>
      </div>
      <button type="submit" className="btn">Send Message</button>
    </form>
   
  </div>
</section>




  </> )
}

export default Contact