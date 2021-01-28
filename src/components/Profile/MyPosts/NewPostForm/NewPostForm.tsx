import React from 'react'
import styles from './NewPost.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import cn from 'classnames'

type OwnPropsType = {
  addPost: (newPostText: string) => void
}

type FormType = {
  newPostText: string
}

type PropsType = InjectedFormProps<FormType> & OwnPropsType

let NewPostForm: React.FC<PropsType> = props => {
  const {addPost, handleSubmit, reset} = props


  const onSubmit = (data: any) => {
    addPost(data.newPostText)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.newPost__form}>
      <Field component='textarea' name='newPostText' className={styles.newPost__textarea}/>
      <div className={styles.newPost__buttons}>
        <button type='submit' className={cn(styles.newPost__btn, styles.newPost__btnSubmit)}>Выложить</button>
        <button type='reset' className={styles.newPost__btn} onClick={reset}>Очистить</button>
      </div>

    </form>
  )
}


// @ts-ignore
export default reduxForm<FormType, OwnPropsType>({form: 'newPost'})(NewPostForm)
