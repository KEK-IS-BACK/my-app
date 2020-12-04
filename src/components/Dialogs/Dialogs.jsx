import React from 'react'
import styles from './Dialogs.module.css'
import NewMessageFormContainer from "./Message/NewMessageForm/NewMessageFormContainer";


const Dialogs = (props) => {

  return (
    <div className={styles.dialogs}>
      <div className={styles.chats}>
        { props.chatsElements }
      </div>
      <div className={styles.messages}>
        <div>
          { props.messagesElements }
        </div>
        <div>
          <NewMessageFormContainer sendMessage={props.sendMessage}/>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;