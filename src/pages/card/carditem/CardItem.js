import Sale from "../../../components/sale/Sale";
import Price from "../../../components/price/Price";
import s from "./CardItem.module.scss"

function CardItem({img, price, title}) {
    return (
        <div className={s.carditem}>
            <Sale/>
            <img className={s.img} src={img} alt="img" />
            <span className={s.priceOld}>1200 475 <span className={s.ruble}>&#8381;</span>  </span>
            <Price price={price}  />
            <h3 className={s.title}>{title}</h3>
        </div>
    );
}

export default CardItem;
