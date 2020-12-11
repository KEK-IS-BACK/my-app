import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'
import NewPost from "./NewPostForm/NewPost";
import {connect} from "react-redux";
import {addPost} from "../../../redux/profile-reducer";



const MyPosts = (props) => {
  let postElements = props.posts.map(post => <Post message={post.text} likeCount={post.likeCount} key={post.id}/>)
  return (
    <div className={styles.posts}>
      <div>
       <NewPost addPost={props.addPost}/>
      </div>
      {postElements}
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts
  }
}

export default connect(mapStateToProps, {addPost})(MyPosts)
