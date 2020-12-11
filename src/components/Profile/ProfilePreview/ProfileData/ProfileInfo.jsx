import styles from "./ProfileInfo.module.css";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import {useState} from "react";
import ProfileInfoForm from "./ProfileInfoForm/ProfileInfoForm";

const ProfileDataContainer = (props) => {
  const [isEditMode, setIsEditMode] = useState(false)

  const toggleIsEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  const onSubmit = (data) => {
    props.updateProfileInfo(data)
    toggleIsEditMode()
  }

  return (
    !isEditMode
      ? <ProfileInfo {...props}
                     toggleIsEditMode={toggleIsEditMode}/>
      : <ProfileInfoForm updateProfileInfo={props.updateProfileInfo}
                         onSubmit={onSubmit}
                         initialValues={props.userProfile}
                         contacts={props.userProfile.contacts}/>
  )
}


const ProfileInfo = ({userProfile, status, updateStatus, toggleIsEditMode}) => {
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

const Contacts = ({contacts}) => {
  return Object.keys(contacts).map(key => {
    return <div key={key} className={styles.contact}>{key}: {contacts[key]}</div>
  })
}


export default ProfileDataContainer