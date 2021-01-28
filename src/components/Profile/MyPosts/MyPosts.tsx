import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'
import NewPost from "./NewPostForm/NewPost";
import {PostType} from "../../../types/types";

type PropsType = {
  addPost: (newPostText: string) => void
  posts: Array<PostType>
}

const MyPosts: React.FC<PropsType> = props => {
  const {addPost, posts} = props

  let postElements = posts.map(post => <Post message={post.text} likeCount={post.likeCount} key={post.id}/>)

  return (
    <div className={styles.posts}>
      <div>
       <NewPost addPost={addPost}/>
      </div>
      {postElements}
    </div>
  );
}

export default MyPosts
