import React from 'react'
import Message from "./Message/Message";
import ChatItem from "./ChatsItem/ChatsItem";
import {addMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type ChatType = {
  id: number,
  name: string
}

type MessageType = {
  id: number,
  text: string
}

let mapStateToProps = (state: any) => {
  let chatsElements = state.messagesPage.chats.map((chat: ChatType) => <ChatItem id={chat.id}
                                                                                 name={chat.name}
                                                                                 key={chat.id}/>)
  let messagesElements = state.messagesPage.messages.map((message: MessageType) => <Message text={message.text}
                                                                                            key={message.id}/>)

  return {
    chatsElements: chatsElements,
    messagesElements: messagesElements,
    newMessageText: state.messagesPage.newMessageText,
  }
}

let mapDispatchToProps = (dispatch: any) => {
  return {
    sendMessage: (newMessageText: string) => {
      dispatch(addMessageCreator(newMessageText))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)