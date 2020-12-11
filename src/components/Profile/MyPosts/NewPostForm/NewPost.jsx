import React from 'react'
import styles from './NewPost.module.css'
import NewPostForm from "./NewPostForm";

const NewPost = props => {


  return (
    <div className={styles.newPost}>
      <NewPostForm addPost={props.addPost}/>
    </div>

  )
}


export default NewPost