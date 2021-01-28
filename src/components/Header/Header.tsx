import React from "react";
import {NavLink} from "react-router-dom";
import Account from "./Account/Account";
import {connect} from "react-redux";
import {authMe, logout, setAuthUserData} from "../../redux/auth-reducer";
import {getIsAuth, getLogin, getSmallOwnerPhoto} from "../../redux/selectors";
import styles from './Header.module.css'
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {

}

type MapDispatchPropsType = {
  setAuthUserData: (id: number, login: string, email: string) => void
  authMe: () => void
  logout: () => void
}

type OwnPropsType = {
  login: () => void,
  logout: () => void,
  smallPhoto: string,
  isAuth: boolean
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const Header: React.FC<PropsType> = (props) => {
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

const mapStateToProps = (state: AppStateType) => ({
  login: getLogin(state),
  isAuth: getIsAuth(state),
  smallPhoto: getSmallOwnerPhoto(state)
})

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
(mapStateToProps, {setAuthUserData, authMe, logout})(Header);