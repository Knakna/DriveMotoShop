import React from 'react';

import s from './ProductCode.module.scss';




function ProductCode(props) {
  return (
    <span className={s.code}>Код товара: {props.code}</span>
  );
}

export default ProductCode;


