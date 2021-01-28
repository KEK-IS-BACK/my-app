import React from 'react'
import NewMessageForm from "./NewMessageForm";

type PropsType = {
  sendMessage: (newMessageText: string) => void
}

class NewMessageFormContainer extends React.Component<PropsType> {
  onSubmit = (data: any) => {
    this.props.sendMessage(data.newMessageText)
  }

  render() {
    return <NewMessageForm onSubmit={this.onSubmit}/>
  }
}

export default NewMessageFormContainer