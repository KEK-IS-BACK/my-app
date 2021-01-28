import React from 'react'
import styles from './../Dialogs.module.css'

type PropsType = {
  text: string
}

const Message: React.FC<PropsType> = props => {
  const {text} = props

  return <div className={styles.message}>{text}</div>
}

export default Message;