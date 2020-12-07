import React from "react";
import styles from "./Input.module.css"


const Input = ({input, meta, ...restProps}) => {
  return(
    <div>
      <input {...input} {...restProps} className={styles.input}/>
      {meta.touched && meta.error && <span>Error</span>}
    </div>
  )
}

export default Input