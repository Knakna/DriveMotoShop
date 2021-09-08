import React from 'react';

import heart from './../../assets/icons/LikeIcon.svg'

import s from './Heart.module.scss';




function Heart() {
  return (

    <button className={s.heart}>
      <img className={s.img} src={heart} alt="heart"  />
    </button>

  );
}

export default Heart;


