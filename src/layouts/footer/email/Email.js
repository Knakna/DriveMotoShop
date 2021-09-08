import s from './Email.module.scss'
import React from "react";

function Email() {
    return (
        <div className={s.email}>
            <p className={s.email__text}>Подпишитесь на нашу рассылку <br/>
            и узнавайте о акция быстрее</p>
            <input className={s.email__form} type="url" name="sait" placeholder="Введите ваш e-mail:"/>
            <button className={s.searchBtn}>Отправить</button>
        </div>
    );
}

export default Email;