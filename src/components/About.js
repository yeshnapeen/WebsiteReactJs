import React from 'react'
import main from '../images/main.jpg'
import Title from './Title'

const About = () => {
  return (
    
    <>
       
      <section className="section" id="about">
      <Title title="about" subTitle="us"/>
      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={main}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
          We are a team of passionate fashion enthusiasts who are dedicated to bringing you the latest trends, styles, and inspiration.
          Our mission is to provide a platform for people to express their individuality through fashion. We believe that everyone deserves to feel confident and comfortable in their own skin, and that fashion is one of the best ways to achieve that.

          </p>
          <p>
          At Fashion House, we curate a selection of high-quality, trendy clothing, accessories, and footwear from some of the top fashion brands. Our team of experienced fashion editors carefully selects each item to ensure that it meets our high standards of quality, style, and affordability.

          </p>
          <a href="#" className="btn">read more</a>
        </article>
      </div>
    </section>
    </>
  )
}

export default About