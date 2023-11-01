import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export const Slider = ({ slides }) => {
  return (
    <Swiper
      className="swiper-container"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={80}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      effect={"cube"}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} >
        <div className="slide__wrapper">
        <img src={slide.image} alt="" />
        <div className="details">
          <span className="deal"> {slide.title} </span>
          <h4> { slide.body } </h4>
          <button> Rent Now </button>
        </div>
        </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )

}


export default Slider;