import React from 'react'
import style from './User.module.css'
import {NavLink} from "react-router-dom";
import photo from '../../../assets/images/profilePhoto.jpg'

const User = (props) => {
  return (
    <div className={style.user} id={props.user.id} >
      <div className={style.userPreview}>
        <div className={style.userBody}>
          <div className={style.mainInfo}>
            <h3>{props.user.name}</h3>
            <p className={style.status}>{props.user.status}</p>
          </div>
        </div>
        <NavLink to={`profile/${props.user.id}`}>
          <div className={style.userImage}>
            <img src={props.user.photos.small
              ? props.user.photos.small
              : photo} alt=""
            />
          </div>
        </NavLink>
        {
          props.user.followed
            ?
            <button disabled={props.btnFolllowDisabled.some(el => el === props.user.id)}
                    onClick={() => {
                      props.unfollow(props.user.id)
                    }}>
              Unfollow
            </button>
            :
            <button disabled={props.btnFolllowDisabled.some(el => el === props.user.id)}
                    onClick={() => {
                      props.follow(props.user.id)
                    }}>
              Follow
            </button>
        }
      </div>

    </div>
  )
}

export default User