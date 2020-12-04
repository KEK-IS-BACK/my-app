import React from 'react'
import {Field, reduxForm} from "redux-form";

let NewPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component='textarea' name='newPostText'/>
      <button>Add</button>
    </form>
  )
}

NewPostForm = reduxForm({form: 'newPost'})(NewPostForm)

export default NewPostForm