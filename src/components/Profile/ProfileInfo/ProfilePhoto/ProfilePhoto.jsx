import React from 'react'
import styles from './ProfilePhoto.module.css'
import {connect} from "react-redux";
import {getProfilePhotos} from "../../../../redux/selectors";
import {setProfilePhoto} from "../../../../redux/profile-reducer";
import photo from '../../../../assets/images/profilePhoto.jpg'

const ProfilePhoto = ({profilePhotos, setProfilePhoto}) => {
  return (
    <div>
      <img src={profilePhotos.large || photo}
           alt="ProfilePhoto"
           className={styles.profilePhoto}
      />
      <div>
        Обновить фотографию:
        <input type="file" className={styles.btnUpdateProfilePhoto} onChange={(e) => {
          if (e.target.files[0]) setProfilePhoto(e.target.files[0])
        }}/>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  profilePhotos: getProfilePhotos(state)
})

export default connect(mapStateToProps, {setProfilePhoto})(ProfilePhoto)