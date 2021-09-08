import s from "./filterTitle.module.scss";

function FilterTitle(props) {
    return (
        <>
        <h3 className={ props.active ? `${s.title} ${s.active}` : `${s.title}` }>{props.text}</h3>
        </>
    );
}

export default FilterTitle;