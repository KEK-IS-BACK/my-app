import React from 'react'
import styles from './ProfilePreview.module.css'
import ProfileDataContainer from "./ProfileData/ProfileData";
import ProfileCardPhoto from "./ProfileCardPhoto/ProfileCardPhoto";

const ProfilePreview = (props) => {
  return (
    <div className={styles.profilePreview}>
      <ProfileCardPhoto/>
      <ProfileDataContainer userProfile={props.userProfile}
                            status={props.status}
                            updateStatus={props.updateStatus}
                            updateProfileInfo={props.updateProfileInfo}/>
    </div>
  );
}

export default ProfilePreview