import React, {useState} from "react";
import {UserProfileType} from "../../../../types/types";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileInfoForm from "./ProfileInfoForm/ProfileInfoForm";

type PropsType = {
  updateProfileInfo: (data: any) => void
  userProfile: UserProfileType
  status: string
  updateStatus: (newStatus: string) => void
}

const ProfileDataContainer: React.FC<PropsType> = (props) => {
  const {updateProfileInfo, userProfile, status, updateStatus} = props

  const [isEditMode, setIsEditMode] = useState(false)

  const toggleIsEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  const onSubmit = (data: any) => {
    updateProfileInfo(data)
    toggleIsEditMode()
  }

  return (
    !isEditMode
      ? <ProfileInfo userProfile = {userProfile}
                     status={status}
                     updateStatus={updateStatus}
                     toggleIsEditMode={toggleIsEditMode}/>
      : <ProfileInfoForm updateProfileInfo={updateProfileInfo}
                         onSubmit={onSubmit}
                         initialValues={userProfile}
                         contacts={userProfile.contacts}/>
  )
}

export default ProfileDataContainer