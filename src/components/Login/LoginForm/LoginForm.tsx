import React, {useState} from "react";
import LoginFormInput from "./LoginFormInput/LoginFormInput";
import Captcha from "../../common/Captcha/Captcha";
import {Field, reduxForm} from "redux-form";
import {loginFormValidator} from "../../../utils/validators";
import styles from './LoginForm.module.css'

type PropsType = {
  handleSubmit: any,
  captchaUrl: string,
  setCaptcha: any,
  error: string,
  login: any
}

const LoginForm: React.FC<PropsType> = props => {
  const {handleSubmit, captchaUrl, setCaptcha, error, login} = props
  const [isDisabled, setIsDisabled] = useState(false)


  const onSubmit = async (data: any) => {
    setIsDisabled(true)
    await login(data.email, data.password, data.rememberMe, data.captcha)
    setIsDisabled(false)
  }

  return (
    <div className={styles.loginForm}>
      <h1 className={styles.loginForm__title}>Вход</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm__body}>
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
        {captchaUrl && <Captcha setCaptcha={setCaptcha}
                                 captchaUrl={captchaUrl}/>}
        <div>{error && <span>{error}</span>}</div>
        <div>
          <button type='submit'
                  disabled={isDisabled}
                  className={styles.loginForm__btnSubmit}>
            Войти
          </button>
        </div>
      </form>
    </div>
  )
}


// @ts-ignore
export default reduxForm({form: 'login', validate: loginFormValidator})(LoginForm)