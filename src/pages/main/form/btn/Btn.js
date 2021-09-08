import React from 'react';


import s from './Btn.module.scss';



function Btn(props) {

  const activeClass = props.checkedValue === props.value ? s.active : "";

  const handleOnChange = (e) => {
    props.handleOnChangeCheckedValue(e.currentTarget.value)
  }

  return (

    <label className={`${s.label} ${activeClass}`}  > {props.label}

      <input
        className={s.btn}
        type="radio"
        name="search"
        value={props.value}
        onChange={handleOnChange}
        />

    </label>


  );
}

export default Btn;
