import React from 'react'
import style from './Users.module.css'
import User from "./User/User";
import Pagination from "../common/Pagination/Pagination";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let Users = props => {


  return (
    <div className={style.pageUsers}>
      <Pagination totalUsersCount={props.totalUsersCount}
                  pageUsersCount={props.pageUsersCount}
                  currentPage={props.currentPage}
                  onPageChange={props.onPageChange}/>
      <div className={style.users}>
          {
            props.users.map(user => <User user={user}
                                          key={user.id}
                                          btnFolllowDisabled={props.btnFolllowDisabled}/>
            )
          }
        </div>
      <Pagination totalUsersCount={props.totalUsersCount}
                  pageUsersCount={props.pageUsersCount}
                  currentPage={props.currentPage}
                  onPageChange={props.onPageChange}/>
    </div>
  )
}


export default withAuthRedirect(Users)