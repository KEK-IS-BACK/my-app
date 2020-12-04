import React from 'react'
import Message from "./Message/Message";
import ChatsItem from "./ChatsItem/ChatsItem";
import {addMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {

  let chatsElements = state.messagesPage.chats.map(chat => <ChatsItem id={chat.id} name={chat.name} key={chat.id}/>)
  let messagesElements = state.messagesPage.messages.map(message => <Message id={message.id} text={message.text} key={message.id}/>)

  return {
    chatsElements: chatsElements,
    messagesElements: messagesElements,
    newMessageText: state.messagesPage.newMessageText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageText) => {
      dispatch(addMessageCreator(newMessageText))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)