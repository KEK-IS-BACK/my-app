import React from 'react'
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Preloader from "../common/Preloader";
import ProfilePreview from "./ProfilePreview/ProfilPreview";


const Profile = (props) => {

  if (!props.userProfile) {
    return <Preloader/>
  }

  return (
    <div className={styles.profilePage}>
      <ProfilePreview userProfile={props.userProfile}
                      status={props.status}
                      updateStatus={props.updateStatus}
                      updateProfileInfo={props.updateProfileInfo}/>
      <MyPosts store={props.store}/>
    </div>
  );
}

export default Profile