import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators";
import styles from './Login.module.css'


let LoginForm = props => {
  debugger
  return (
    <form onSubmit={props.handleSubmit} className={styles.loginForm__body}>
      <Field placeholder='Email'
             component='input'
             name='email'
             validate={[required]}
             className={styles.loginForm__input}/>
      <Field placeholder='Password'
             component='input'
             name='password'
             type='password'
             className={styles.loginForm__input}/>
      <label className={styles.loginForm__rememberMe}> Запомнить меня:
        <Field type='checkbox'
               component='input'
               name='rememberMe'/>
      </label>
      {props.captchaUrl
      &&
      <div className={styles.loginForm__captcha}>
        <img src={props.captchaUrl}/>
        <Field component='input'
               validate={[required]}
               name='captcha'/>
      </div>
      }
      <div>
        {props.error
        && <span>{props.error}</span>}</div>
      <div>
        <button type='submit' className={styles.loginForm__btnSubmit}>Войти</button>
      </div>
    </form>
  )
}

LoginForm = reduxForm({form: 'login'})(LoginForm)

export default LoginForm