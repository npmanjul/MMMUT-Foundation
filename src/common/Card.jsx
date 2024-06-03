import React from 'react'
import "./card.css"
const Card = ({ image, heading, text }) => {
  return (
    <div>


<main>
  <div className = "card_style">
    <img src={image}/>
    <div className="card-content">
      <h2>
        {heading}
      </h2>
      <p>
        {text}
      </p>
      {/* <a href="#" className="card_button">
        Find out more 
        <span className="material-symbols-outlined">
          arrow_right_alt
        </span>
      </a> */}
    </div>
  </div>
</main>


    </div>
  )
}

export default Card