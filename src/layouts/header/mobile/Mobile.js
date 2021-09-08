import React from 'react';
import MenuLink from '../menu/menuLink/MenuLink';

import { ReactComponent as Basket } from './../../../assets/icons/BasketIcon.svg';

// import { Link } from 'react-router-dom';



// import { Link } from 'react-router-dom';
import enter from './../../../assets/icons/PersonalIcon.svg'
import home from './../../../assets/icons/home.svg'
import pay from './../../../assets/icons/pay.svg'
import heart from './../../../assets/icons/LikeIcon.svg'
import action
  from './../../../assets/icons/pr.svg'

import s from './Mobile.module.scss';






function Mobile({showMenu}) {

const showMobileMenu = showMenu
? s.mobile + " " + s.active
: s.mobile

  return (


    <nav className={showMobileMenu}>
      <ul className={s.menuList}>

        <li className={s.item}>
          <img className={s.img} src={enter} alt="" />
          <MenuLink text="Войти" />
        </li>
        <li className={s.item}>
          <img className={s.img} src={enter} alt="" />
          <MenuLink text="Регистрация" />
        </li>
        <li className={s.item}>
          <img className={s.img} src={heart} alt="" />
          <MenuLink text="Избранное" />
        </li>
        <li className={s.item}>
          <Basket className={s.img} fill="#2F3035" />
          <MenuLink text="Корзина" />
        </li>
        <li className={s.item}>
          <img className={s.img} src={home} alt="" />
          <MenuLink text="Магазины" />
        </li>
        <li className={s.item}>
          <img className={s.img} src={action} alt="" />
          <MenuLink text="Акции" />
        </li>
        <li className={s.item}>
          <img className={s.img} src={pay} alt="" />
          <MenuLink text="Доставка и оплата" />
        </li>

        <li className={s.item}>
          <MenuLink text="Квадроциклы" />
        </li>
        <li className={s.item}>
          <MenuLink text="Катера" />
        </li>
        <li className={s.item}>
          <MenuLink text="Гидроциклы" />
        </li>
        <li className={s.item}>
          <MenuLink text="Лодки" />
        </li>
        <li className={s.item}>
          <MenuLink text="Вездеходы" />
        </li>
        <li className={s.item}>
          <MenuLink text="Снегоходы" />
        </li>
        <li className={s.item}>
          <MenuLink text="Двигатели" />
        </li>
        <li className={s.item}>
          <MenuLink text="Запчасти" />
        </li>
        <li className={s.itemAdress}>
          Москва, <br /> ул. Науки  25
        </li>



      </ul>


    </nav>

  );
}

export default Mobile;

