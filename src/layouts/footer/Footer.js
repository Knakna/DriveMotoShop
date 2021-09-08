import Menu from "./menu/Menu";
import Secondmenu from "./secondmenu/Secondmenu";
import Contract from "./contract/Сontract";
import Social from "./social/Social";
import Email from "./email/Email";
import s from './Footer.module.scss'

function Footer() {
    return (
        <div className={s.footer}>
            <div className="container">
                <div className={s.inner}>
                    <Email />
                    <Menu />
                    <Secondmenu />
                    <Social />
                </div>
                <Contract />
            </div>
        </div>
    );
}

export default Footer;