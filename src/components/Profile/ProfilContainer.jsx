import React from 'react'
import Profile from "./Profil";
import {connect} from "react-redux";
import {getProfile, getStatus, setUserProfile, updateProfileInfo, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getAuthUserId} from "../../redux/selectors";

class ProfileContainer extends React.Component {
  requestUserProfile = () => {
    let userId = this.props.match.params.userId || this.props.authUserId || null
    if (userId !== null) {
      this.props.getProfile(userId)
      this.props.getStatus(userId)
    } else {
      this.props.history.push('/login')
    }
  }

  componentDidMount() {
    this.requestUserProfile()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.requestUserProfile()
    }
  }

  render() {
    return (
      <Profile userProfile={this.props.userProfile}
               isAuth={this.props.isAuth}
               status={this.props.status}
               updateStatus={this.props.updateStatus}
               updateProfileInfo={this.props.updateProfileInfo}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
    authUserId: getAuthUserId(state)
  }
}


export default compose(
  connect(mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus, updateProfileInfo}),
  withRouter
)(ProfileContainer)