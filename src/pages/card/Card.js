import React from 'react';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Adress from './adress/Adress';
import CardFeatures from './cardFeatures/CardFeatures';
import CardMenu from './cardMenu/CardMenu';
import s from './Card.module.scss';
import Products from '../main/products/Products';

import bag from '../../assets/images/shopItems/spare-parts/bag.png';
import airflow from '../../assets/images/shopItems/spare-parts/airflow.png';
import brp from '../../assets/images/shopItems/spare-parts/brp.png';
import equipment from '../../assets/images/shopItems/spare-parts/equipment.png';

import audio from '../../assets/images/shopItems/spare-parts/audio.png';
import echomap from '../../assets/images/shopItems/spare-parts/echomap.png';
import key from '../../assets/images/shopItems/spare-parts/key.png';
import suit from '../../assets/images/shopItems/spare-parts/suit.png';




function Card() {

  const data1 = {
    title: "Водонепроницаемый Рюкзак",
    price: "9 800",
    img: bag,
    link: "/1"
  }

  const data2 = {
    title: "Спасательный жилет BRP Men's Airflow PFD",
    price: "6 900",
    img: airflow,
    link: "/2"
  }
  const data3 = {
    title: "BRP Audio-Premium System",
    price: "68 000",
    img: brp,
    link: "/3"
  }

  const data4 = {
    title: "Спасательное снаряжение",
    price: null,
    img: equipment,
    link: "/4"
  }

  const data5 = {
    title: "BRP Audio-портативная система",
    price: null,
    img: audio,
    link: "/5"
  }

  const data6 = {
    title: "Garmin Echomap Plus 62cv",
    price: "45 800",
    img: echomap,
    link: "/6"
  }

  const data7 = {
    title: "RF D.E.S.S.TM Key",
    price: null,
    img: key,
    link: "/7"
  }

  const data8 = {
    title: "Мужской костюм 3мм",
    price: "7 000",
    img: suit,
    link: "/8"
  }



  return (

    <div className={s.card}>
      <Breadcrumb />
      <CardFeatures />
      <CardMenu />
      <Adress />
      <Products text="С этим товаром покупают" data1={data1} data2={data2} data3={data3} data4={data4} data5={data5} data6={data6} data7={data7} data8={data8} />

    </div>

  );
}

export default Card;
