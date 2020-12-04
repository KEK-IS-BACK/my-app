import React from 'react'
import styles from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";

const ProfileInfo = (props) => {

  return (
    <div className={styles.profilPreview}>
      <ProfilePhoto/>
      <div className={styles.profileInfo}>
        <h2 className={styles.profileInfo__fullName}>{props.userProfile.fullName}</h2>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        <div className={styles.profileInfo__userId}>ID: {props.userProfile.userId}</div>
        <p className={styles.profileInfo__aboutMe}>About me: {props.userProfile.aboutMe}</p>
        <div className={styles.profileInfo__contacts}>
          Контакты
          <div className={styles.profileInfo__facebook}>{props.userProfile.contacts.facebook}</div>
          <div className={styles.profileInfo__website}>{props.userProfile.contacts.website}</div>
          <div className={styles.profileInfo__vk}>{props.userProfile.contacts.vk}</div>
          <div className={styles.profileInfo__twitter}>{props.userProfile.contacts.twitter}</div>
          <div className={styles.profileInfo__instagram}>{props.userProfile.contacts.instagram}</div>
          <div className={styles.profileInfo__youtube}>{props.userProfile.contacts.youtube}</div>
          <div className={styles.profileInfo__github}>{props.userProfile.contacts.github}</div>
          <div className={styles.profileInfo__mainLink}>{props.userProfile.contacts.mainLink}</div>
        </div>
        <div className={styles.profileInfo__aboutJob}>
          {props.userProfile.lookingForAJob ? 'В поисках работы' : 'Не в поисках работы'}
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo