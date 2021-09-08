import React from 'react';
import slider from './../../../assets/images/pages/slider.jpg';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper/core';

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

import s from './PromoSlider.module.scss';



SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

function PromoSlider() {


  return (

    <div className={s.sliderWrapper}>

      <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true}>
        <SwiperSlide>
          <img className={s.img} src={slider} alt="" />
          <h2 className={s.title}>Почувствуй скорость&nbsp;и экстрим</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.img} src={slider} alt="" />
          <h2 className={s.title}>Почувствуй скорость и экстрим</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.img} src={slider} alt="" />
          <h2 className={s.title}>Почувствуй скорость и экстрим</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.img} src={slider} alt="" />
          <h2 className={s.title}>Почувствуй скорость и экстрим</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.img} src={slider} alt="" />
          <h2 className={s.title}>Почувствуй скорость и экстрим</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.img} src={slider} alt="" />
          <h2 className={s.title}>Почувствуй скорость и экстрим</h2>
        </SwiperSlide>
      </Swiper>




    </div>
  );
}

export default PromoSlider;
