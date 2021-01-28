import styles from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import React from "react";
import {UserProfileType} from "../../../../../types/types";

type PropsType = {
  userProfile: UserProfileType
  status: string
  updateStatus: (newStatus: string) => void
  toggleIsEditMode: () => void
}

const ProfileInfo: React.FC<PropsType> = (props) => {
  const {userProfile, status, updateStatus, toggleIsEditMode} = props

  return (
    <div className={styles.profileInfo}>
      <div className={styles.profileInfo__header}>
        <h2 className={styles.profileInfo__fullName}>{userProfile.fullName}</h2>
        <div className={styles.profileInfo__userId}>ID: {userProfile.userId}</div>
      </div>
      <ProfileStatus status={status} updateStatus={updateStatus}/>
      <p className={styles.profileInfo__aboutMe}>Обо мне: {userProfile.aboutMe}</p>
      <div className={styles.profileInfo__contacts}>
        Контакты
        <Contacts contacts={userProfile.contacts}/>
      </div>
      <div className={styles.profileInfo__lookingForAJob}>
        {userProfile.lookingForAJob ? 'В поисках работы' : 'Не в поисках работы.'}
        <div className={styles.profileInfo__lookingForAJobDescription}>
          Профессиональные навыки: {userProfile.lookingForAJobDescription}
        </div>
      </div>
      <button onClick={toggleIsEditMode} className={styles.profileInfo__btnEdit}>Редактировать</button>
    </div>
  )
}

const Contacts = (props: any) => {
  const {contacts} = props

  return <>
    {Object.keys(contacts)
      .map(key => {
        return <div key={key} className={styles.contact}>{key}: {contacts[key]}</div>
      })
    }
  </>

}


export default ProfileInfo