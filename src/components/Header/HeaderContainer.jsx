import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {authMe, setAuthUserData, logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {setAuthUserData, authMe, logout})(HeaderContainer)