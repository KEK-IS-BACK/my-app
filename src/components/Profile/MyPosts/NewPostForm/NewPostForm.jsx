import React from 'react'
import styles from './NewPost.module.css'
import {Field, reduxForm} from "redux-form";
import cn from 'classnames'

let NewPostForm = props => {

  const onSubmit = (data) => {
    props.addPost(data.newPostText)
  }

  return (
    <form onSubmit={props.handleSubmit(onSubmit)} className={styles.newPost__form}>
      <Field component='textarea' name='newPostText' className={styles.newPost__textarea}/>
      <div className={styles.newPost__buttons}>
        <button type='submit' className={cn(styles.newPost__btn, styles.newPost__btnSubmit)}>Выложить</button>
        <button type='reset' className={styles.newPost__btn} onClick={props.reset}>Очистить</button>
      </div>

    </form>
  )
}


export default reduxForm({form: 'newPost'})(NewPostForm)