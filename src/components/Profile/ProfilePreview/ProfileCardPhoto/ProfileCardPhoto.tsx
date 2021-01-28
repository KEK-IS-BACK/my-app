import React, {ChangeEvent} from 'react'
import styles from './ProfileCardPhoto.module.css'
import {connect} from "react-redux";
import {getProfilePhotos} from "../../../../redux/selectors";
import {setProfilePhoto} from "../../../../redux/profile-reducer";
import photo from '../../../../assets/images/profilePhoto.jpg'
import {AppStateType} from "../../../../redux/redux-store";

type PropsType = {
  profilePhotos: {
    large: string
    small: string
  }
  setProfilePhoto: (photo: any) => void
}

const ProfileCardPhoto: React.FC<PropsType> = (props) => {
  const {profilePhotos, setProfilePhoto} = props

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    if (e.target.files[0]) {
      // @ts-ignore
      setProfilePhoto(e.target.files[0])
    }
  }
  return (
    <div className={styles.cardPhoto}>
      <div className={styles.profilePhoto}>
        <div className={styles.profilePhoto__img}>
          <img src={profilePhotos.large || photo}
               alt="ProfilePhoto"/>
        </div>
        <div className={styles.profilePhoto__cardButtons}>
          <input type="file"
                 id={styles.updateProfilePhotoInput}
                 onChange={onChangeHandler}/>
          <label htmlFor={styles.updateProfilePhotoInput}
                 className={styles.labelUpdateProfilePhoto}>Обновить фото</label>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppStateType) => ({
  profilePhotos: getProfilePhotos(state)
})

// @ts-ignore
export default connect(mapStateToProps, {setProfilePhoto})(ProfileCardPhoto)
