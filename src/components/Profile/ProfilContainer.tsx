import React from 'react'
import Profile from "./Profil";
import {connect} from "react-redux";
import {
  addPost,
  getProfile,
  getStatus,
  setUserProfile,
  updateProfileInfo,
  updateStatus
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getAuthUserId, getProfilePosts} from "../../redux/selectors";
import {PostType, UserProfileType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
  userProfile: UserProfileType
  status: string
  authUserId: number
  posts: Array<PostType>
}

type MapDispatchPropsType = {
  setUserProfile: () => void
  getProfile: (userId: number) => void
  getStatus: (userId: number) => void
  updateStatus: () => void
  updateProfileInfo: () => void
  addPost: () => void
}

type RouteComponentProps = {
  match: any
  history: any
}

type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps

class ProfileContainer extends React.Component<PropsType> {

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

  componentDidUpdate(prevProps: PropsType) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.requestUserProfile()
    }
  }

  render() {
    const {userProfile, status, updateStatus, updateProfileInfo, addPost, posts} = this.props

    return (
      <Profile userProfile={userProfile}
               status={status}
               updateStatus={updateStatus}
               updateProfileInfo={updateProfileInfo}
               addPost={addPost}
               posts={posts}

      />
    )
  }
}

let mapStateToProps = (state: AppStateType) => ({
  userProfile: state.profilePage.userProfile,
  status: state.profilePage.status,
  authUserId: getAuthUserId(state),
  posts: getProfilePosts(state)
})


export default compose(
  connect(mapStateToProps,
    {
      setUserProfile,
      getProfile,
      getStatus,
      updateStatus,
      updateProfileInfo,
      addPost
    }),
  withRouter
)(ProfileContainer)