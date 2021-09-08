import s from './Menu.module.scss';

function Menu() {
    return (
        <div className={s.menu}>
            <h3 className="menu__title">Информация</h3>
            <ul className="menu__list">
                <li className={s.menu__item}><a className={s.menu__link}
                                              href="">О компании</a></li>
                <li className={s.menu__item}><a className={s.menu__link}
                                              href="">Контакты</a></li>
                <li className={s.menu__item}><a className={s.menu__link}
                                              href="">Акции</a></li>
                <li className={s.menu__item}><a className={s.menu__link}
                                              href="">Магазины</a></li>
            </ul>
        </div>
    );
}

export default Menu;