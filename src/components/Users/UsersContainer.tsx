import React from 'react'
import Users from './Users'
import {connect} from "react-redux";
import {
  follow,
  requestUsers,
  setCurrentPage,
  unfollow
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {
  getBtnFolllowDisabled,
  getCurrentPage,
  getIsFetching,
  getPageUsersCount,
  getTotalUserCount,
  getUsers
} from "../../redux/selectors";
import {AppStateType} from "../../redux/redux-store";

type MapDispatchPropsType = {
  getUsers: (currentPage: number, pageUsersCount: number) => void
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setCurrentPage: (pageNumber: number) => void
}

type MapStatePropsType = {
  users: any
  totalUsersCount: number
  pageUsersCount: number
  currentPage: number
  isFetching: boolean
  btnFolllowDisabled: Array<number>
}

type PropsType = MapDispatchPropsType & MapStatePropsType

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageUsersCount)
  }

  onPageChange = (page: number) => {
    this.props.setCurrentPage(page)
    this.props.getUsers(page, this.props.pageUsersCount)
  }

  render() {
    if(this.props.isFetching) return <Preloader/>

    return (
        <Users totalUsersCount={this.props.totalUsersCount}
               pageUsersCount={this.props.pageUsersCount}
               currentPage={this.props.currentPage}
               users={this.props.users}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               onPageChange={this.onPageChange}
               btnFolllowDisabled={this.props.btnFolllowDisabled}
        />
    )
  }
}

let mapStateToProps = (state: AppStateType) => ({
    users: getUsers(state),
    totalUsersCount: getTotalUserCount(state),
    pageUsersCount: getPageUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    btnFolllowDisabled: getBtnFolllowDisabled(state)
})


export default connect<MapStatePropsType, MapDispatchPropsType, any, AppStateType>
(mapStateToProps,{follow, unfollow,setCurrentPage,getUsers: requestUsers})(UsersContainer)