import React from 'react'
import styles from './NewPost.module.css'
import NewPostForm from "./NewPostForm";

type PropsType = {
  addPost: (newPostText: string) => void
}

const NewPost: React.FC<PropsType> = props => {
  const {addPost} = props

  return (
    <div className={styles.newPost}>
      <NewPostForm addPost={addPost}/>
    </div>

  )
}


export default NewPost