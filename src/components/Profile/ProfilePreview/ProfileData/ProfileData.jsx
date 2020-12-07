import styles from "./ProfileData.module.css";
import ProfileStatus from "../ProfileStatus/ProfileStatusWithHooks";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";

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
      ? <ProfileData {...props}
                     toggleIsEditMode={toggleIsEditMode}/>
      : <ProfileDataForm updateProfileInfo={props.updateProfileInfo}
                         onSubmit={onSubmit}
                         initialValues={props.userProfile}
                         contacts={props.userProfile.contacts}/>
  )
}


const ProfileData = ({userProfile, status, updateStatus, toggleIsEditMode}) => {
  return (
      <div className={styles.profileInfo}>
        <h2 className={styles.profileInfo__fullName}>{userProfile.fullName}</h2>
        <ProfileStatus status={status} updateStatus={updateStatus}/>
        <hr/>
        <p>Обо мне: {userProfile.aboutMe}</p>
        <div className={styles.profileInfo__userId}>ID: {userProfile.userId}</div>
        <div className={styles.profileInfo__contacts}>
          Контакты
          <Contacts contacts={userProfile.contacts}/>
        </div>
        <div className={styles.profileInfo__aboutJob}>
          {userProfile.lookingForAJob ? 'В поисках работы' : 'Не в поисках работы.'}
          <div>Профессиональные навыки: {userProfile.lookingForAJobDescription}</div>
        </div>
        <button onClick={toggleIsEditMode}>
          Редактировать
        </button>
      </div>
  )
}

const Contacts = ({contacts}) => {
  return Object.keys(contacts).map(key => {
    return <div key={key} className={styles.contact}>{key}: {contacts[key]}</div>
  })
}


export default ProfileDataContainer