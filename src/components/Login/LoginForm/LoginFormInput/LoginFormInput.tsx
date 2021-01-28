import React from "react";
import styles from './LoginFormInput.module.css'
import Error from "../../../common/Error/Error";

type PropsType = {
  input: any,
  meta: any
}

const LoginFormInput: React.FC<PropsType> = props => {
  const {input, meta: {touched, error}, ...restProps} = props

  return (
    <div className={styles.loginForm__field}>
      <input {...input} {...restProps} className={styles.loginForm__input}/>
      {
        touched && error && <Error error={error}/>
      }
    </div>
  )
}

export default LoginFormInput