import React from "react";
import styles from "./Input.module.css"
import Error from "../Error/Error";

type PropsType = {
  input: any,
  meta: any,
  validators: any
}

const Input: React.FC<PropsType> = props => {
  const {input, meta: {error, touched}, validators, ...restProps} = props

  return (
    <div className={styles.field}>
      <input {...input} {...restProps} className={styles.field__input}/>
      {
        touched && error && <Error error={error}/>
      }
    </div>

  )
}

export default Input