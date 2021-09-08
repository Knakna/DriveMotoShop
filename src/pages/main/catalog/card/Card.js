import React from 'react';
import { Link } from 'react-router-dom';

import s from './Card.module.scss';


function Card({ title, img }) {
  return (

    <Link to={`/catalog`}>

      <div className={s.card}>

        <div className={s.wrapContent}>
          <h3 className={s.caption}>{title}</h3>
          <span className={s.more} >Подробнее&gt;</span>
        </div>
        <div className={s.wrapImg}>
          <img className={s.img} src={img} alt="card" />
        </div>

      </div>

    </Link>
  );
}

export default Card;
