import React from 'react'
import styles from './ProfileCardPhoto.module.css'
import {connect} from "react-redux";
import {getProfilePhotos} from "../../../../redux/selectors";
import {setProfilePhoto} from "../../../../redux/profile-reducer";
import photo from '../../../../assets/images/profilePhoto.jpg'

const ProfileCardPhoto = ({profilePhotos, setProfilePhoto}) => {
  return (
    <div className={styles.cardPhoto}>
      <div className={styles.profilePhoto}>
        <div className={styles.profilePhoto__img}>
          <img src={profilePhotos.large || photo}
               alt="ProfilePhoto"/>
        </div>
        {/*<div className={styles.btnDeletePhoto}>*/}
        {/*  <div></div>*/}
        {/*</div>*/}
        <div className={styles.profilePhoto__cardButtons}>
          <input type="file"
                 id={styles.updateProfilePhotoInput}
                 onChange={(e) => {
                   if (e.target.files[0]) {
                     setProfilePhoto(e.target.files[0])
                   }
                 }}/>
                 <label htmlFor={styles.updateProfilePhotoInput}
                        className={styles.labelUpdateProfilePhoto}>Обновить фото</label>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  profilePhotos: getProfilePhotos(state)
})

export default connect(mapStateToProps, {setProfilePhoto})(ProfileCardPhoto)