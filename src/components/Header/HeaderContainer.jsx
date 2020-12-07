import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {authMe, setAuthUserData, logout} from "../../redux/auth-reducer";
import {getSmallOwnerPhoto} from "../../redux/selectors";

class HeaderContainer extends React.Component {
  componentDidMount() {
    if(!this.props.isAuth) {

    }
  }

  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
  smallPhoto: getSmallOwnerPhoto(state)
})

export default connect(mapStateToProps, {setAuthUserData, authMe, logout})(HeaderContainer)