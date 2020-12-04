import React from 'react'
import Login from "./Login";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";

class LoginContainer extends React.Component {

  onSubmit = (data) => {
    this.props.login(data.email, data.password, data.rememberMe)
  }

  render() {
    return (
      <Login onSubmit={this.onSubmit}/>
    )
  }
}

let mapStateToProps = (state) => ({
  state: state
})

export default connect(mapStateToProps,{login})(LoginContainer)