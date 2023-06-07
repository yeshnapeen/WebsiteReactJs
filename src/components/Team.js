import React from 'react'
import Title from './Title'
import { blog } from '../data'


const Team = () => {
  return (
    <>
    <section className="section" id="team">
      <Title title="Our" subTitle="Blog" />
      <div className="section-center featured-center">
      {blog.map ((blog) => {
          const {id,date,img,title,text,location,days,price} = blog
          return(
            <article className="team-card" key={id}>
          <div className="team-img-container">
            <img src={img} className="team-img" alt="" />
            <p className="team-date">{date}</p>
          </div>
          <div className="team-info">
            <div className="team-title">
              <h4>{title}</h4>
            </div>
            <p>
              {text}
            </p>
            <div className="team-footer">
              <p>
               
                
              </p>
              <p>{days}</p>
              <p>{price}</p>
            </div>
          
          </div>
        </article>
          )
         })}
      </div>
    </section>
    </>
  )
}

export default Team