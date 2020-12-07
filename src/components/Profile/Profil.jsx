import React from 'react'
import styles from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader";
import ProfilePreview from "./ProfilePreview/ProfilPreview";


const Profile = (props) => {

  if (!props.userProfile) {
    return <Preloader/>
  }

  return (
    <div>
      <ProfilePreview userProfile={props.userProfile}
                      status={props.status}
                      updateStatus={props.updateStatus}
                      updateProfileInfo={props.updateProfileInfo}/>
      <MyPostsContainer store={props.store}/>
    </div>
  );
}

export default Profile