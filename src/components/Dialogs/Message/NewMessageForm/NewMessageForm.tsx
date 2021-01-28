import React from 'react'
import {Field, reduxForm} from "redux-form";

type PropsType = {
  handleSubmit: any
}

const NewMessageForm: React.FC<PropsType> = props => {
  const {handleSubmit} = props

  return (
    <form onSubmit={handleSubmit}>
      <Field component='textarea' name='newMessageText'/>
      <button>Send</button>
    </form>
  )
}


export default reduxForm({form: 'newMessage'})(NewMessageForm);
//