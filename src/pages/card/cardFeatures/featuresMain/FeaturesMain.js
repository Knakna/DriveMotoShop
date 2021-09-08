import React from 'react';
import s from './FeaturesMain.module.scss';
import Item from './item/Item';





function FeaturesMain() {
  return (
    <>
   <table className={s.features}> 
   
   <tr><Item text="Производитель"/><Item text="Канада"/></tr> 
   <tr><Item text="Количество мест, шт: "/><Item text="3"/></tr> 
   <tr><Item text="Мощность, л.с."/><Item text="155"/></tr> 
   <tr><Item text="Тип двигателя"/><Item text="Бензиновый"/></tr> 
   <tr><Item text="Год выпуска"/><Item text="	2018"/></tr> 
   </table>
    </>
  );
}

export default FeaturesMain;
