import React from 'react'
import styles from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = (props) => {

  let friendsElements = props.friends.map(friend => <Friend name={friend.name} id={friend.id} key={friend.id}/>)

  return (
    <div className={styles.friends}>
      <h2>Friends</h2>
      <div className={styles.friends__body}>
        { friendsElements }
      </div>
    </div>
  )
}

export default Friends