import React from 'react'
import styles from './Friend.module.css'
import {NavLink} from "react-router-dom";

const Friend = props => {
  return (
    <NavLink to={`/friends/${props.id}`} className={styles.friend}>
      <div className={styles.friend__img}>
      </div>
      <p className={styles.friend__name}>{props.name}</p>
    </NavLink>
  )
}

export default Friend