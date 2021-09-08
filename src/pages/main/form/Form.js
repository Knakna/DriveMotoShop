import React, { useState } from 'react';
import Btn from './btn/Btn';


import s from './Form.module.scss';



function Form() {

  const [checkedValue, setCheckedValue] = useState("Поиск по марке")

  const handleOnChangeCheckedValue = (value) => {
    setCheckedValue(value)
  }

  const active = true;
  return (
    <form className={s.form}>

      <div className={s.radioBtns}>
        <Btn
          checkedValue={checkedValue}
          handleOnChangeCheckedValue={handleOnChangeCheckedValue}
          text="Поиск по номеру"
          value="Поиск по номеру"
          label="Поиск по номеру" />
        <Btn
          checkedValue={checkedValue}
          handleOnChangeCheckedValue={handleOnChangeCheckedValue}
          active={active}
          text="Поиск по марке"
          value="Поиск по марке"
          label="Поиск по марке" />
        <Btn
          checkedValue={checkedValue}
          handleOnChangeCheckedValue={handleOnChangeCheckedValue}
          text="Поиск по названию товара"
          value="Поиск по названию товара"
          label="Поиск по названию товара" />
      </div>


      <div className={s.wrapInput}>
        <input className={s.input} type="text" placeholder="Введите марку" />
        <button className={s.searchBtn}>ИСКАТЬ</button>
      </div>

    </form>
  );
}

export default Form;
