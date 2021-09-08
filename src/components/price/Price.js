import React from 'react';

import s from './Price.module.scss';



function Price(props) {
  return (
    <span className={s.price} style={props.style}>{props.price}  </span>
  );
}

export default Price;
