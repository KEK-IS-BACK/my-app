import styles from './Header.module.css'
import {NavLink} from "react-router-dom";
import Account from "./Account/Account";
import {connect} from "react-redux";
import {authMe, logout, setAuthUserData} from "../../redux/auth-reducer";
import {getSmallOwnerPhoto} from "../../redux/selectors";


const Header = (props) => {

  const {login, logout, smallPhoto, isAuth} = props

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__body}>
          <div>
            <NavLink to='/' className={styles.logo}>Social Network</NavLink>
          </div>
          {
            isAuth
              ?
              <Account smallPhoto={smallPhoto}
                       login={login}
                       logout={logout}/>
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

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
  smallPhoto: getSmallOwnerPhoto(state)
})

export default connect(mapStateToProps, {setAuthUserData, authMe, logout})(Header);