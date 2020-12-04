import React from 'react'
import NewMessageForm from "./NewMessageForm";

class NewMessageFormContainer extends React.Component {
  onSubmit = data => {
    this.props.sendMessage(data.newMessageText)
  }

  render() {
    return <NewMessageForm onSubmit={this.onSubmit}/>
  }
}

export default NewMessageFormContainer