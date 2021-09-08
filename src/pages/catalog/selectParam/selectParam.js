import React from 'react';

import s from './selectParam.module.scss';



function selectParam(props) {
  return (
  <>
  <div className={s.wrapper}>
    <span className={s.item}>{props.text}</span>
  </div>
  </>

  );
}

export default selectParam;

