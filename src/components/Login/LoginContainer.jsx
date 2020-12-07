import React from 'react'
import {Redirect} from 'react-router-dom'
import Login from "./Login";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {getCaptchaUrl, getIsAuth} from "../../redux/selectors";

class LoginContainer extends React.Component {

  onSubmit = (data) => {
    this.props.login(data.email, data.password, data.rememberMe, data.captcha)
  }

  render() {

    if(this.props.isAuth) return <Redirect to='/profile' />

    return (
      <Login onSubmit={this.onSubmit}
             captchaUrl={this.props.captchaUrl}
      />
    )
  }
}

let mapStateToProps = (state) => ({
  captchaUrl: getCaptchaUrl(state),
  isAuth: getIsAuth(state)
})

export default connect(mapStateToProps,{login})(LoginContainer)