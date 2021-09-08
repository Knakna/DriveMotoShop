
import React from 'react';

import Title from '../../components/title/Title';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import BorderAllIcon from '@material-ui/icons/BorderAll';
import s from './catalog.module.scss';
import SelectParam from './selectParam/selectParam';
import Card from '../../components/card/Card';
import bag from '../../assets/images/shopItems/spare-parts/bag.png';
import airflow from './../../assets/images/shopItems/spare-parts/airflow.png';
import brp from './../../assets/images/shopItems/spare-parts/brp.png';
import equipment from './../../assets/images/shopItems/spare-parts/equipment.png';
import Pagination from '@material-ui/lab/Pagination';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Filter from './filter/filter';



function Catalog() {
  const catalog = true;
  return (
   <>
   <main className={s.catalog}>
     <article className={s.product}>
     <Breadcrumb />

     <Title
     text="Гидроциклы"
     />
     <header className={s.wrapperHead}>
     <div className={s.selectParam}>
       <SelectParam
       text="Полноприводные"
       />
        <SelectParam
       text="от 5000"
       />
      <SelectParam
       text="BRP"
       />
        <SelectParam
       text="еще"
       />
       </div>
       <form className={s.list}>
         <select className={s.items}>
            <option className={s.item}>По популярности</option>
            <option className={s.item}>По рейтингу</option>
            <option className={s.item}>Новинки</option>
         </select>
         <BorderAllIcon />
         <FormatListBulletedIcon color="disabled"  />
       </form>
     </header>
     <section className={s.content}>
        <aside className={s.filter}>
          <Filter/>
        </aside>
        <div className={s.card} >
          <Card img={bag} title="Водонепроницаемый Рюкзак" price="9 800" catalog={catalog} />
          <Card img={airflow} title="Спасательный жилет BRP Men's Airflow PFD" price="6 900" catalog={catalog} />
          <Card img={brp} title="BRP Audio-Premium System" price="68 000" catalog={catalog} />
          <Card img={equipment} title="Спасательное снаряжение" catalog={catalog} />
          <Card img={bag} title="Водонепроницаемый Рюкзак" price="9 800" catalog={catalog} />
          <Card img={airflow} title="Спасательный жилет BRP Men's Airflow PFD" price="6 900" catalog={catalog} />
          <Card img={brp} title="BRP Audio-Premium System" price="68 000" catalog={catalog} />
          <Card img={equipment} title="Спасательное снаряжение" catalog={catalog} />
          <Card img={bag} title="Водонепроницаемый Рюкзак" price="9 800" catalog={catalog} />
          <Card img={airflow} title="Спасательный жилет BRP Men's Airflow PFD" price="6 900" catalog={catalog} />
          <Card img={brp} title="BRP Audio-Premium System" price="68 000" catalog={catalog} />
          <Card img={equipment} title="Спасательное снаряжение" catalog={catalog} />
        </div>
     </section>
     <footer className={s.pagination}>
     <Pagination count={10}  shape="rounded" variant="outlined" hidePrevButton hideNextButton color="primary"/>

     </footer>
     </article>
   </main>
   </>
  );
}

export default Catalog;
