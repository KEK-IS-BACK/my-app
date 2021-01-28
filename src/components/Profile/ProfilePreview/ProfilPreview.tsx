import React from 'react'
import styles from './ProfilePreview.module.css'
import ProfileDataContainer from "./ProfileData/ProfileDataContainer";
import ProfileCardPhoto from "./ProfileCardPhoto/ProfileCardPhoto";
import {UserProfileType} from "../../../types/types";

type PropsType = {
  userProfile: UserProfileType
  status: string,
  updateStatus: () => void
  updateProfileInfo: (data: any) => void
}

const ProfilePreview: React.FC<PropsType> = (props) => {
  const {userProfile, status, updateStatus, updateProfileInfo} = props

  return (
    <div className={styles.profilePreview}>
      <ProfileCardPhoto/>
      <ProfileDataContainer userProfile={userProfile}
                            status={status}
                            updateStatus={updateStatus}
        // @ts-ignore
                            updateProfileInfo={updateProfileInfo}/>
    </div>
  );
}

export default ProfilePreview