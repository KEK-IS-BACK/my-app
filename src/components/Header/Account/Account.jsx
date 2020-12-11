import {NavLink, useHistory} from "react-router-dom";
import photo from "../../../assets/images/profilePhoto.jpg";
import styles from './Account.module.css'
import {useState} from "react";

const Account = (props) => {
  const [isShowSettings, setIsShowSettings] = useState(false)
  const history = useHistory()

  const showSettings = () => {
    setIsShowSettings(!isShowSettings)
  }

  const logout = () => {
    props.logout().then(() => {
      history.push('/login')
    })
  }
  console.log('Header')
  return (
    <div className={styles.account}>
      <NavLink to='profile/' className={styles.account__body}>
        <div className={styles.account__login}>{props.login}</div>
        <img src={props.smallPhoto || photo}
             alt=""
             className={styles.account__photo}/>
      </NavLink>
      <div className={styles.account__settings} onClick={showSettings}>
        <div className={styles.account__settingsArrow}></div>
      </div>
      <div className={`${styles.account__settingsBody} ${isShowSettings && styles.active}`}>
        <button onClick={logout} className={styles.account__settingsBtn}>Выйти</button>
      </div>
    </div>
  )
}

export default Account