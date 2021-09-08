import React from 'react';

import { Link } from 'react-router-dom';

import atv from './../../../assets/images/pages/atv.png'
import utv from './../../../assets/images/pages/utv.png'

import s from './Banner.module.scss';



function Banner() {
  return (

    <div className={s.banner}>
      <img className={`${s.img} ${s.atv}`} src={atv}  alt="atv" />
      <img className={`${s.img} ${s.utv}`} src={utv} alt="utv" />
      <h3 className={s.title}>CКИДКИ  на&nbsp;все&nbsp;запчасти до 70%</h3>

      <Link to={`/catalog`}>
        <button className={s.btn}>Посмотреть все</button>
      </Link>
    </div>
  );
}

export default Banner;
