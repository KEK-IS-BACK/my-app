import React from 'react'
import styles from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader";
import ProfileInfo from "./ProfileInfo/ProfilInfo";

const Profile = (props) => {

  if(!props.userProfile) {
    return <Preloader/>
  }

  return (
    <div>
      <ProfileInfo userProfile={props.userProfile}
                   status={props.status}
                   updateStatus={props.updateStatus}/>
      <MyPostsContainer store={props.store}/>
    </div>
  );
}

export default Profile