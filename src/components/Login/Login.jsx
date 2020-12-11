import React from 'react'
import LoginForm from "./LoginForm/LoginForm";
import styles from "./Login.module.css"
import {connect} from "react-redux";
import {login, setCaptcha} from "../../redux/auth-reducer";
import {getCaptchaUrl, getIsAuth} from "../../redux/selectors";
import {Redirect} from "react-router-dom";
import OpeningSpeech from "./OpeningSpeech/OpeningSpeech";


const Login = (props) => {

  if (props.isAuth) return <Redirect to='/profile'/>

  return (
    <>
      <div className={styles.loginPage}>
        <div className={styles.loginPage__body}>
          <LoginForm onSubmit={props.onSubmit}
                     setCaptcha={props.setCaptcha}
                     captchaUrl={props.captchaUrl}
                     login={props.login}
          />
        </div>
      </div>
      <OpeningSpeech />
    </>
  )
}

let mapStateToProps = (state) => ({
  captchaUrl: getCaptchaUrl(state),
  isAuth: getIsAuth(state)
})

export default connect(mapStateToProps, {login, setCaptcha})(Login)