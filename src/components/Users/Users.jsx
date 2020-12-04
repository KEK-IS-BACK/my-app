import React, {useState} from 'react'
import style from './Users.module.css'
import User from "./User/User";
import Pagination from "../common/Pagination/Pagination";


let Users = props => {


  return (
    <div className={style.pageUsers}>
      <Pagination totalUsersCount={props.totalUsersCount}
                  pageUsersCount={props.pageUsersCount}
                  currentPage={props.currentPage}
                  onPageChange={props.onPageChange}/>
      <div className={style.users}>{
        props.users.map(user => <User user={user}
                                      key={user.id}
                                      btnFolllowDisabled={props.btnFolllowDisabled}/>
        )
      }</div>
    </div>
  )
}


export default Users