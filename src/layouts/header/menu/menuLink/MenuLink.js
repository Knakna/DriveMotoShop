import React from 'react';
import { Link } from 'react-router-dom';
import s from './MenuLink.module.scss';



function MenuLink(props) {
  return (

    <Link to="/catalog" className={s.link} style={props.style} >{props.text}</Link>

  );
}

export default MenuLink;

