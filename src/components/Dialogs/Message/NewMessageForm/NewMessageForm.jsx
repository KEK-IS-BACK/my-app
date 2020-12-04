import React from 'react'
import {Field, reduxForm} from "redux-form";

let NewMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component='textarea' name='newMessageText'/>
      <button>Send</button>
    </form>
  )
}

NewMessageForm = reduxForm({form: 'newMessage'})(NewMessageForm)


export default NewMessageForm