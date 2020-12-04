import React from 'react'
import styles from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const ChatsItem = (props) => {
  return (
    <div className={styles.chats__item}>
      <NavLink to={'/dialogs/' + '' + props.id}>{props.name}</NavLink>
    </div>
  )
}

export default ChatsItem;