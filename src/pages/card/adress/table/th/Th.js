import React from 'react';


import s from './Th.module.scss';



function Th(props) {

  return (

    <th className={s.th}>{props.text}</th>

  );
}

export default Th;
