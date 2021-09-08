import React from 'react';

import { Link } from 'react-router-dom';

import  s from './CardLink.module.scss';



function CardLink(props) {
  return (
    <Link to="/catalog" className={s.cardLink} href="tut.by">
{props.text}
    </Link>

  );
}

export default CardLink;

