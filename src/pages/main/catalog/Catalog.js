import React from 'react';

import Card from './card/Card';

import atv from './../../../assets/images/pages/atv.png'
import pwc from './../../../assets/images/pages/pwc.png'
import boat from './../../../assets/images/pages/boats.png'
import snow from './../../../assets/images/pages/snowmobiles.png'
import utv from './../../../assets/images/pages/utv.png'
import engine from './../../../assets/images/pages/engines.png'

import s from './Catalog.module.scss';


function Catalog() {
  return (

    <div className={s.catalog}>
      <Card title="Квадроциклы" img={atv} />
      <Card title="Гидроциклы" img={pwc} />
      <Card title="Катера" img={boat} />
      <Card title="Снегоходы" img={snow} />
      <Card title="Вездеходы" img={utv} />
      <Card title="Двигатели" img={engine} />
    </div>
  );
}

export default Catalog;
