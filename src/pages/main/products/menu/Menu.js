import React from 'react';

// import { Link } from 'react-router-dom';

import s from './Menu.module.scss';
import MenuLink from './menuLink/MenuLink';



function Menu() {
  return (
    <nav className={s.menu}>
      <MenuLink text="запчасти" />
      <MenuLink text="моторы" />
      <MenuLink text="шины" />
      <MenuLink text="электроника" />
      <MenuLink text="инструменты" />
      <MenuLink text="аксессуары" />

    </nav>
  )

}

export default Menu;

