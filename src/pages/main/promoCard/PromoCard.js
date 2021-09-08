import React from 'react';

import Price from '../../../components/price/Price';

import suzuki from './../../../assets/images/shopItems/engine/suzuki.png';

import { Link } from 'react-router-dom';

import s from './PromoCard.module.scss';




function PromoCard() {
  return (

    <Link to="/card" >

      <div className={s.promoCard}>
        <span className={s.mark}>акция</span>

        <div className={s.wrapPrice}>

          <Price price="190 000 &#8381;" style={{ color: "#1C62CD", fontSize: "27px" }} />

          <span className={s.priceOld}>225 000 <span className={s.ruble}>&#8381;</span>  </span>

        </div>

        <div className={s.wrapContent}>

          <img className={s.imgCard} src={suzuki} alt="suzuki" />

          <h3 className={s.titleCard}>Лодочный мотор Suzuki DF9.9BRS</h3>

        </div>

        <div className={s.wrapValidity}>

          <span className={s.validity}>
            Акция действует до <time className={s.data} datetime="2020-08-31">31.08.2020</time>
          </span>

        </div>

      </div>

    </Link>
  );
}

export default PromoCard;
