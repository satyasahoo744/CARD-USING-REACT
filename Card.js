import React from 'react'
import "./Card.css"

function Card({titel,imageUrl,body}) {
  return (
    <div className='card-container'>
    <div  className='image-container'>
    <img src={imageUrl} alt='' />
          </div>
          <div className="card-titel">
           <h3> {titel} </h3> 
          </div>
          <div className="cardbody">
           <p> {body} </p>
          </div>
          <div className="btn">
            <button>
                <a>
                    CLIC TO VIEW MORE
                </a>
            </button>
          </div>
          </div>


  )
}

export default Card