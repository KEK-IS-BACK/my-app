import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'
import NewPostFormContainer from "./NewPostForm/NewPostFormContainer";



const MyPosts = (props) => {
  let postElements = props.posts.map(post => <Post message={post.text} likeCount={post.likeCount} key={post.id}/>)
  return (
    <div>My posts
      <div>
        New post
       <NewPostFormContainer addPost={props.addPost}/>
      </div>
      {postElements}
    </div>
  );
}

export default MyPosts;