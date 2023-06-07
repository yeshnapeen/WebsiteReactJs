import React from 'react'

const Title = ({title,subTitle}) => {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <h2>
            {title} <span> {subTitle} </span>
        </h2>
      </div>
    </section>
  )
}

export default Title
