import React from 'react';
import s from "./Item.module.scss";

function Item(props) {
    return (
        <>
        <td className={s.item}>{props.text}</td>
        </>
    );
}
export default Item;