import './card.css'

import React from 'react'

const Card = ({item}) => {
  return (
    <div className='item__container'>
        {
            item.map(({ id, name, price, review, cat, oldNew, color, image })=> {
                return (
                    <article className="item__wrapper" key={id}>
                        <div className="image__container">
                            <img src={image} alt="Product" />
                            <button> Message Owner </button>
                        </div>
                        <div className="details__con">
                            <p> { cat } </p>
                            <p> { name } </p>
                            <p> { price } </p>
                            <p> Review: { review } </p>
                        </div>
                        <div className="Hover__container">
                            <div className="oldNew" style={{color: {color}}} > {oldNew} </div>
                        </div>
                    </article>
                )
            })
        }
    </div>
  )
}

export default Card
