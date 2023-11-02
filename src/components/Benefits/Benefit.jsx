import './benefit.css'
import { LiaRocketSolid } from 'react-icons/lia'
import { FiInfo } from 'react-icons/fi'
import { BiSupport } from 'react-icons/bi'
import { BiSolidRightTopArrowCircle } from 'react-icons/bi'

const Benefit = () => {
  return (
    <div className='content__container'>
        <div className="content__container">
            <LiaRocketSolid className='icon' />
            <div className="content__info">
                <p> Free Shipping </p>
                <p> Order 50k or more </p>
            </div>
        </div>
        <div className="content__container">
            <BiSolidRightTopArrowCircle className='icon' />
            <div className="content__info">
                <p> Free Return </p>
                <p> within 30 days </p>
            </div>
        </div>
        <div className="content__container">
            <FiInfo className='icon' />
            <div className="content__info">
                <p> Get 20% Off 1 item  </p>
                <p> When you sign up </p>
            </div>
        </div>
        <div className="content__container">
            <BiSupport className='icon' />
            <div className="content__info">
                <p> We Support </p>
                <p> 24/7 amazing services </p>
            </div>
        </div>
    </div>
  )
}

export default Benefit
