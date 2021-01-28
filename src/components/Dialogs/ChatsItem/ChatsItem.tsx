import React from 'react'
import styles from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {
  id: number,
  name: string
}

const ChatsItem: React.FC<PropsType> = props => {
  const {id, name} = props

  return (
    <div className={styles.chats__item}>
      <NavLink to={'/dialogs/' + id}>{name}</NavLink>
    </div>
  )
}

export default ChatsItem;