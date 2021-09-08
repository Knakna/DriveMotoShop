import React from 'react';
import { Link } from 'react-router-dom';
import s from './HeaderLink.module.scss';



function HeaderLink(props) {
  return (

    <Link to="/" className={s.link} style={props.style}>{props.text}</Link>
  );
}

export default HeaderLink;

