import React from 'react'
import LoginForm from "./LoginForm";
import styles from "./Login.module.css"


export const Login = (props) => {
  console.log('Update')
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginPage__body}>
        <div className={styles.loginForm}>
          <h1 className={styles.loginForm__title}>Вход</h1>
          <LoginForm onSubmit={props.onSubmit}
                     captchaUrl={props.captchaUrl}
                     className={styles.loginForm__body}/>
        </div>
      </div>
    </div>
  )
}

export default Login