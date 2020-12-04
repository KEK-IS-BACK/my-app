import React from 'react'
import NewPostForm from "./NewPostForm";

class NewPostFormContainer extends React.Component{
  onSubmit = (data) => {
    this.props.addPost(data.newPostText)
  }

  render() {
    return (
     <NewPostForm onSubmit={this.onSubmit}/>
    )
  }
}


export default NewPostFormContainer