import s from './Сontract.module.scss'

function Contract() {
    return (
        <div className="contract">
            <ul className={s.contract__list}>
                <li className="contract__item"><a className={s.contract__link}
                                                  href="">Договор оферты</a></li>
                <li className={s.contract__item}><a className={s.contract__link}
                                                  href="">Политика обработки персональных данных</a></li>
            </ul>
        </div>
    );
}

export default Contract;