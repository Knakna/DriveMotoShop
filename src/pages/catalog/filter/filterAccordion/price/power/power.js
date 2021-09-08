import s from "./power.module.scss";


export default function Power() {
    return (
        <div className={s.wrapper}>
        <form className={s.list}>
         <select className={s.items}>
            <option className={s.item}>По популярности</option>
            <option className={s.item}>По рейтингу</option>
            <option className={s.item}>Новинки</option>
         </select>
        </form>
        </div>
    );
}