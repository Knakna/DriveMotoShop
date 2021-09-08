import s from './Secondmenu.module.scss'

function Secondmenu() {
    return (
        <div className={s.secondmenu}>
            <h3 className="secondmenu__title">Интернет-магазин</h3>
            <ul className="secondmenu__list">
                <li className={s.secondmenu__item}><a className={s.secondmenu__link}
                                                      href="">Доставка и самовывоз</a></li>
                <li className={s.secondmenu__item}><a className={s.secondmenu__link}
                                                      href="">Оплата</a></li>
                <li className={s.secondmenu__item}><a className={s.secondmenu__link}
                                                      href="">Возврат-обмен</a></li>
                <li className={s.secondmenu__item}><a className={s.secondmenu__link}
                                                      href="">Новости</a></li>
            </ul>
        </div>
    );
}

export default Secondmenu;