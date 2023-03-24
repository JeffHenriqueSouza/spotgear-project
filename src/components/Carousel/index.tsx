import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import image1 from "../../assets/images/evolution.jpeg";
import image2 from "../../assets/images/force.jpeg";
import styles from './Carousel.module.scss';

export default function Carousel() {
  return (
    <div className={styles.wrapper}>
      <Swiper
        pagination={{
          type: 'progressbar'
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className={styles.img} src={image1} alt=""/>
        </SwiperSlide>
        <SwiperSlide> 
          <img className={styles.img} src={image2} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
