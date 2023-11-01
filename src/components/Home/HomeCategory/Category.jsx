import React from 'react'
// import { ProductsCategoryList } from '../../../constant/List'
import img1 from '../catsImage/cat-page/1.jpg'
import img2 from '../catsImage/cat-page/2.jpg'
import img3 from '../catsImage/cat-page/3.jpg'
import img4 from '../catsImage/cat-page/4.jpg'
import img5 from '../catsImage/cat-page/5.jpg'
import img6 from '../catsImage/cat-page/6.jpg'
import img7 from '../catsImage/cat-page/7.jpg'
import './category.css'

const ProductsCategoryList = [
  {
      id: 1,
      image: img1,
      category: "House",
  },
  {
      id: 2,
      image: img2,
      category: "Shop"
  },
  {
      id: 3,
      image: img3,
      category: "Auto"
  },
  {
      id: 4,
      image: img4,
      category: "Auto"
  },
  {
      id: 5,
      image: img5,
      category: "Auto"
  },
  {
      id: 6,
      image: img6,
      category: "Auto"
  },
  {
      id: 7,
      image: img7,
      category: "Auto"
  }
]

const Category = () => {
  return (
    <div className='category__container'>
      {ProductsCategoryList.map((cat) => {
        return (
          <article className="cat__container" key={cat.id}>
            <div className="imgCon">
              <img src={cat.image} alt="Cats" />
            </div>
          <span>{cat.category}</span>
        </article>
        )
      })}
    </div>
  )
}

export default Category
