import brp from '../../../../assets/images/shopItems/pwc/brp.png';
import CardItem from '../CardItem';
import s from './ProductsItem.module.scss';


function ProductsItem() {
    return (
        <div className={s.productsitem}>
            <CardItem img={brp} price="1100 475 &#8381;" title="Нашли дешевле? Снизим цену!"/>
        </div>
    );
}

export default ProductsItem;
