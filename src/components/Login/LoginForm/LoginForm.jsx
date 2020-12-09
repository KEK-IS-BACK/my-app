import React from "react";
import {Field, reduxForm} from "redux-form";
import styles from './LoginForm.module.css'
import {loginFormValidator} from "../../../utils/validators";
import LoginFormInput from "./LoginFormInput/LoginFormInput";
import Captcha from "../../common/Captcha/Captcha";
import {useState} from "react";


let LoginForm = props => {
  const [isDisabled, setIsDisabled] = useState(false)


  const onSubmit = (data) => {
    setIsDisabled(true)
    props.login(data.email, data.password, data.rememberMe, data.captcha).then( () => {
      setIsDisabled(false)
      }
    )
  }

  return (
    <div className={styles.loginForm}>
      <h1 className={styles.loginForm__title}>Вход</h1>
      <form onSubmit={props.handleSubmit(onSubmit)} className={styles.loginForm__body}>
        <Field placeholder='Email'
               component={LoginFormInput}
               name='email'
               className={styles.loginForm__input}/>
        <Field placeholder='Password'
               component={LoginFormInput}
               name='password'
               type='password'
               className={styles.loginForm__input}/>
        <label className={styles.loginForm__rememberMe}> Запомнить меня:
          <Field type='checkbox'
                 component='input'
                 name='rememberMe'/>
        </label>
        {
          props.captchaUrl && <Captcha setCaptcha={props.setCaptcha}
                                       captchaUrl={props.captchaUrl}/>
        }
        <div>
          {props.error
          && <span>{props.error}</span>}</div>
        <div>
          <button type='submit' disabled={isDisabled} className={styles.loginForm__btnSubmit}>Войти</button>
        </div>
      </form>
    </div>
  )
}

LoginForm = reduxForm({
  form: 'login',
  validate: loginFormValidator
})(LoginForm)

export default LoginForm