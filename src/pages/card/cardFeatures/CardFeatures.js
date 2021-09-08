import React from 'react';
import ProductCode from '../../../components/productCode/ProductCode';
import Title from '../../../components/title/Title';
import s from './CardFeatures.module.scss';

import Btn from '../btn/Btn';
import './CardFeatures.module.scss';
import Heart from '../../../components/heart/Heart';
import BarChart from '../../../components/barChart/BarChart';
import RatingPage from '../../../components/rating/Rating';
import FeaturesMain from './featuresMain/FeaturesMain';
import LinkBtn from './linkBtn/linkBtn';
import ShowMore from './showMore/showMore';
import ProductsItem from "../carditem/productsitem/ProductsItem";


function CardFeatures() {
    const active = true;
    return (
        <>
            <div className={s.cardother}>
                <div className={s.card}><ProductsItem/>
                </div>
                <div className={s.other}><Title
                    text="Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic"
                />
                    <ProductCode
                        code="366666-2"
                    />
                    <div className={s.rating}>
                        <Heart/>
                        <BarChart/>
                        <RatingPage/>

                    </div>
                    <div className={s.link}>
                        <LinkBtn active={active}
                                 text="Характеристики"
                        />
                        <LinkBtn text="Наличие в магазине"
                        />
                    </div>
                    <FeaturesMain/>
                    <ShowMore/>
                    <Btn/>
                </div>
            </div>
        </>
    );
}

export default CardFeatures;
