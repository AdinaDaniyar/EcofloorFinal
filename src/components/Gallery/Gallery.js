import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Gallery.css'

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import gall1 from '../../assets/images/Gallery/msg903692501-4613.jpg'
import gall2 from '../../assets/images/Gallery/msg903692501-4614.jpg'
import gall3 from '../../assets/images/Gallery/msg903692501-4613.jpg'
import gall4 from '../../assets/images/Gallery/msg903692501-4612.jpg'
import gall5 from '../../assets/images/Gallery/1.jpeg'
import gall6 from '../../assets/images/Gallery/2.jpeg'
import gall7 from '../../assets/images/Gallery/3.jpeg'
import gall8 from '../../assets/images/Gallery/4.jpeg'
import gall9 from '../../assets/images/Gallery/5.jpeg'
import gall10 from '../../assets/images/Gallery/6.jpeg'



const Gallery = () => {
    return (
        <section id='gallery'>
            <div className="container">
                <h2 className='gallery__title'>Наши Работы</h2>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    <SwiperSlide><img src={gall5} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={gall6} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={gall7} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={gall8} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={gall9} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={gall10} alt=""/></SwiperSlide>
                </Swiper>
            </div>

        </section>
    );
};

export default Gallery;