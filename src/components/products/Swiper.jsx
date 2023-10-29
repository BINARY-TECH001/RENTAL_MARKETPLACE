// import {Swiper, SwiperSlide} from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/css/bundle'

// export const Slider = ({ slides }) => {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
//       spaceBetween={50}
//       slidesPerView={3}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//       effect={"cube"}
//       cubeEffect={{
//         shadow: true,
//         slideShadows: true,
//         shadowOffset: 20,
//         shadowScale: 0.94,
//       }}
//     >
//       {slides.map((slide) => (
//         <SwiperSlide key={slide.image}>
//           <img src={slide.image} alt={slide.title}/>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   )

// }


import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './swiper.css'; // Import the CSS file

const Carousel = () => {
  useEffect(() => {
    const mySwiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    return () => {
      mySwiper.destroy();
    };
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src="image1.jpg" alt="Slide 1" />
          <div className="slide-content">
            <h2>Slide 1 Title</h2>
            <p>Slide 1 Description goes here.</p>
            <button className="slide-button">Learn More</button>
          </div>
        </div>
        <div className="swiper-slide">
          <img src="image2.jpg" alt="Slide 2" />
          <div className="slide-content">
            <h2>Slide 2 Title</h2>
            <p>Slide 2 Description goes here.</p>
            <button className="slide-button">Explore</button>
          </div>
        </div>
        {/* Add more slides as needed */}
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default Carousel;