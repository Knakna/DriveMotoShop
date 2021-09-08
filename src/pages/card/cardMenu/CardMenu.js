import React from 'react';
import CardLink from './cardLink/CardLink';

import s from './CardMenu.module.scss';


function CardMenu() {
  return (
    <nav className={s.cardMenu}>
      <ul className={s.cardList}>

        <li className={s.cardItem}>
          <CardLink text="О товаре"/>
        </li>
        <li className={s.cardItem}>
          <CardLink text="Характеристики"/>
        </li>
        <li className={s.cardItem}>
          <CardLink text="Отзывы"/>
        </li>
        <li className={s.cardItem}>
          <CardLink text="Самовывоз"/>
        </li>
        <li className={s.cardItem}>
          <CardLink text="Доставка"/>
        </li>
        <li className={s.cardItem}>
          <CardLink text="Сервис"/>
        </li>
        <li className={s.cardItem}>
          <CardLink text="Гарантия"/>
        </li>


      </ul>


    </nav>
  );
}

export default CardMenu;
