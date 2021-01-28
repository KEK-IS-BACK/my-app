import React from 'react'
import style from './Users.module.css'
import User from "./User/User";
import Pagination from "../common/Pagination/Pagination";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {UserType} from "../../redux/users-reducer";


type PropsType = {
  totalUsersCount: number
  pageUsersCount: number
  currentPage: number
  btnFolllowDisabled: Array<number>
  onPageChange: (pageNumber: number) => void
  users: Array<UserType>
  follow: () => void
  unfollow: () => void
}

let Users: React.FC<PropsType> = props => {
  const {
    totalUsersCount,
    pageUsersCount,
    currentPage,
    btnFolllowDisabled,
    onPageChange,
    users,
    follow,
    unfollow
  } = props

  return (
    <div className={style.pageUsers}>
      <Pagination totalUsersCount={totalUsersCount}
                  pageUsersCount={pageUsersCount}
                  currentPage={currentPage}
                  onPageChange={onPageChange}/>

      <div className={style.users}>
        {users.map((user: UserType) => <User user={user}
                                             key={user.id}
                                             btnFolllowDisabled={btnFolllowDisabled}
                                             follow={follow}
                                             unfollow={unfollow}/>)}
      </div>
    </div>
  )
}


export default withAuthRedirect(Users)