import React from 'react'
import styles from './Dialogs.module.css'
import NewMessageFormContainer from "./Message/NewMessageForm/NewMessageFormContainer";


type PropsType = {
  chatsElements: any,
  messagesElements: any,
  sendMessage: (newMessageText: string) => {}
}

const Dialogs: React.FC<PropsType> = props => {
  const {sendMessage, chatsElements, messagesElements} = props

  return (
    <div className={styles.dialogs}>
      <div className={styles.chats}>
        {chatsElements}
      </div>
      <div className={styles.messages}>
        <div>
          {messagesElements}
        </div>
        <div>
          <NewMessageFormContainer sendMessage={sendMessage}/>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;