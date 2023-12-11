import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../Assets/748.jpg';
import image2 from '../../Assets/fond-padel.png';
import image3 from '../../Assets/arreglo-raqueta.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
let arrayimg = [image1, image2, image3];

const SwipeAuto = () => {

  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      onSwiper={(swiper) => console.log(swiper)}
     /*  onSlideChange={() => console.log('slide change')} */
      loop = {true}
      style={{
        height: "726px",
        width :"100%"
      }}
    >
    {arrayimg.map((img, index) => (
      <SwiperSlide key={index} >
      <img src={img} style={{
        width: "100%",
        height: "877px",
        objectFit: "cover",
        objectPosition: "center"
      }} />
    </SwiperSlide>
    ))}
    </Swiper>
  );
};
export default SwipeAuto;
