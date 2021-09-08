import React from 'react';
import Heart from '../heart/Heart';
import Sale from '../sale/Sale';

import { ReactComponent as Basket } from './../../assets/icons/BasketIcon.svg';

import { Link } from 'react-router-dom';
import s from './Card.module.scss';



function Card({img, title, price, sale}) {

  return (

    <Link to="/card" >

      <div className={s.card}>
        {sale && <Sale />}
        <Heart />
        <img className={s.img} src={img} alt="img" />
        <h3 className={s.title}>{title}</h3>

        {price
        ? <span className={s.price}>{price} &#8381;  </span>
        : <span className={s.priceNone}>нет в наличии</span>}
        {price
        ?<button className={s.btn}>
          <Basket />
        </button>
        :<button className={s.report}>Сообщить о поступлении</button>}



        <div className={s.look}>посмотреть товар</div>
      </div >

    </Link>

  );
}

export default Card;




// function Card(props) {
//   return (

//     <div className={s.card}>
//       <Sale/>
//       <Heart />
//       <img className={s.img} src={props.img} alt="img" />
//       <h3 className={s.title}>{props.title}</h3>
//       <Price price={props.price} />
//       {/* <span className={s.priceNone}>нет в наличии</span> */}
//       <button className={s.btn}>
//         <Basket />
//       </button>
//       {/* <button className={s.report}>Сообщить о поступлении</button> */}
//       <div className={s.look}>посмотреть товар</div>

//     </div>
//   );
// }

// export default Card;





