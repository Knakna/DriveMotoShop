import Power from "./power/power";
import RangeSlider from "./slider/slider";
import s from "./price.module.scss";

function Price() {
    return (
        <div className={s.wrapper}>
        <div className={s.slider}><RangeSlider/></div>
        
        <Power/>
        </div>
    );
}
export default Price;