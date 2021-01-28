import React, {useState} from "react";
import {NavLink, useHistory} from "react-router-dom";
import photo from "../../../assets/images/profilePhoto.jpg";
import styles from './Account.module.css'


type PropsType = {
  logout: () => any,
  smallPhoto: string,
  login: () => any
}

const Account: React.FC<PropsType> = (props) => {
  const {logout, smallPhoto, login} = props

  const [isShowSettings, setIsShowSettings] = useState(false)
  const history = useHistory()

  const showSettings = () => {
    setIsShowSettings(!isShowSettings)
  }

  const logoutHandler = () => {
    logout().then(() => {
      history.push('/login')
    })
  }

  return (
    <div className={styles.account}>
      <NavLink to='profile/' className={styles.account__body}>
        <div className={styles.account__login}>{login}</div>
        <img src={smallPhoto || photo}
             alt=""
             className={styles.account__photo}/>
      </NavLink>
      <div className={styles.account__settings} onClick={showSettings}>
        <div className={styles.account__settingsArrow}></div>
      </div>
      <div className={`${styles.account__settingsBody} ${isShowSettings && styles.active}`}>
        <button onClick={logoutHandler} className={styles.account__settingsBtn}>Выйти</button>
      </div>
    </div>
  )
}

export default Account