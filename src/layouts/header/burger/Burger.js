import React from 'react';


// import { Link } from 'react-router-dom';


import s from './Burger.module.scss';




function Burger({showMenu, handleOnClick}) {

const burgerClass = showMenu
? s.burgerLine + " " + s.active
: s.burgerLine

  return (
    <button className={s.burger} onClick={() => handleOnClick()}>
      <span className={burgerClass}> </span>
    </button>

  );
}

export default Burger;

