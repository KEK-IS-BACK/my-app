import styles from './Header.module.css'
import {NavLink} from "react-router-dom";
import Account from "./Account/Account";


const Header = (props) => {

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__body}>
          <div>
            <NavLink to='/' className={styles.logo}>Social Network</NavLink>
          </div>
          {
            props.isAuth
              ?
              <Account smallPhoto={props.smallPhoto}
                       login={props.login}
                       logout={props.logout}/>
              :
              <div className={styles.btnLogin}>
                <NavLink to='/login' className={styles.btnLogin__link}>
                  Войти
                </NavLink>
              </div>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;