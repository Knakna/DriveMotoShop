import React from 'react';

import PromoCard from './promoCard/PromoCard';
import PromoSlider from './promoSlider/PromoSlider';
import Products from './products/Products';
import Form from './form/Form';
import Banner from './banner/Banner';
import Catalog from './catalog/Catalog';


import {data} from './Data'

import s from './Main.module.scss';

function Main() {


  return (
    <main className={s.main}>

      <div className={s.promo}>
        <PromoSlider />
        <div className={s.promoWrap}>
        <PromoCard />
        <div className={s.promoMob}>
        <PromoCard />
        </div>
        </div>
      </div>


      <div className="search">
        <Form />
      </div>

      <Catalog />

      <Products text="Популярные товары" data1={data[0]} data2={data[1]} data3={data[2]} data4={data[3]} data5={data[4]} data6={data[5]} data7={data[6]} data8={data[7]}/>



      <button className={s.showBtn}>Показать еще</button>

      <Banner />

      <Products text="С этим товаром покупают"  data1={data[4]} data2={data[5]} data3={data[6]} data4={data[7]} data5={data[0]} data6={data[1]} data7={data[2]} data8={data[3]}/>


    </main>
  );
}

export default Main;
