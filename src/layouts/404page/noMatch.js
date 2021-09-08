import s from "./noMatch.module.scss";
import { Link } from 'react-router-dom';
function NoMatch() {
  
    return (
      <div className={s.wrapper}>
        <div className={s.error}>
        <h2>
          404
        </h2>
        <h3>Oops! This Page Could Not Be Found
        </h3>
        <p>SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST, HAVE BEEN REMOVED. NAME CHANGED OR IS TEMPORARILY UNAVAILABLE</p>
        <Link to="/" className={s.home} >GO TO HOMEPAGE</Link>
        </div>

        
      </div>
    );
  }

  export default NoMatch