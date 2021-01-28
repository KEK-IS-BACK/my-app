import React from 'react'
import style from './User.module.css'
import {NavLink} from "react-router-dom";
import photo from '../../../assets/images/profilePhoto.jpg'
import {UserType} from "../../../redux/users-reducer";



type PropsType = {
  user: UserType
  btnFolllowDisabled: Array<number>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

const User: React.FC<PropsType> = (props) => {
  const {user, btnFolllowDisabled, follow, unfollow} = props

  const unfollowHandler = () => {
    unfollow(user.id)
  }

  const followHandler = () => {
    follow(user.id)
  }

  return (
    <div className={style.user} id={user.id.toString()}>
      <div className={style.userPreview}>
        <div className={style.userBody}>
          <div className={style.mainInfo}>
            <h3>{user.name}</h3>
            <p className={style.status}>{user.status}</p>
          </div>
        </div>
        <NavLink to={`profile/${user.id}`}>
          <div className={style.userImage}>
            <img src={user.photos.small
              ? user.photos.small
              : photo} alt=""
            />
          </div>
        </NavLink>
        {
          user.followed
            ? <button disabled={btnFolllowDisabled.some(el => el === user.id)}
                    onClick={unfollowHandler}>
              Unfollow
            </button>
            : <button disabled={btnFolllowDisabled.some(el => el === user.id)}
                    onClick={followHandler}>
              Follow
            </button>
        }
      </div>

    </div>
  )
}

export default User