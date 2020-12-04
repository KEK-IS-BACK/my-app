import styles from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="https://purepng.com/public/uploads/large/purepng.com-coca-cola-logococa-colacokecarbonated-soft-drinksoft-drink-1411527233248xlp4z.png" alt='Logo' className={styles.img}/>
      </div>
      <div className={styles.header__login}>
        {
          props.isAuth
            ? <div>
                {props.login}
                <button onClick={props.logout}>Logout</button>
              </div>
            : <NavLink to='/login'> Login </NavLink>
        }

      </div>
    </header>
  );
};

export default Header;