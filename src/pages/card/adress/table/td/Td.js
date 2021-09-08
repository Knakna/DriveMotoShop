import React from 'react';


import s from './Td.module.scss';



function Td(props) {
  return (

    <td className={s.td}>{props.text}</td>
    );

}

export default Td;


