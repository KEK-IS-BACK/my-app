import React from 'react'


class ProfileStatus extends React.Component {
  state = {
    editMod: false,
    status: this.props.status,
  }

  toggleEditMod = () => {
    this.setState({
      editMod: !this.state.editMod
    })
  }

  onStatusChange = (newStatusText) => {
    this.setState({
      status: newStatusText
    })
  }

  componentDidUpdate(prevProps, prevState) {
     if (prevState.status !== this.props.status) {
       this.setState({
         status: this.props.status
       })
    }
  }

  render() {
    return (
      <>
        {
          this.state.editMod
            ? <div>
              <input autoFocus={true}
                     onBlur={() => {
                       this.toggleEditMod()
                       this.props.updateStatus(this.state.status)
                     }}
                     value={this.state.status}
                     onChange={(e) => {
                       this.onStatusChange(e.target.value)
                     }}/>
            </div>
            : <div>
              <span onDoubleClick={() => {
                this.toggleEditMod()
              }}>
                {this.state.status || 'Status'}
              </span>
            </div>
        }
      </>
    )
  }
}

export default ProfileStatus