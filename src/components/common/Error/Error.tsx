import styles from "./Error.module.css";
import React from "react";

type PropsType = {
  error: string
}

const Error: React.FC<PropsType> = props => {
  const {error} = props

  return (
    <div className={styles.error}>
      <div className={styles.error__wrap}>
        <div className={styles.error__icon}>
          <div></div>
        </div>
        <div className={styles.error__text}>{error}</div>
      </div>
    </div>
  )
}

export default Error