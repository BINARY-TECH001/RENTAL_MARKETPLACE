import './card.css'

import React from 'react'

const Card = ({item}) => {
  return (
    <div>
        {
            item.map((item)=> {
                return (
                    <article className="item__container" key={item.id}>
                        <div className="image__container">
                            <img src={item.image} alt="Product" />
                            <button> Message Owner </button>
                        </div>
                        <div className="details">
                            <p> {item.title} </p>
                        </div>
                    </article>
                )
            })
        }
    </div>
  )
}

export default Card
