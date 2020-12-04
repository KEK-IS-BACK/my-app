import React from 'react'
import Users from './Users.jsx'
import {connect} from "react-redux";
import {
  follow,
  requestUsers,
  setCurrentPage,
  unfollow
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader";
import {
  getBtnFolllowDisabled,
  getCurrentPage,
  getIsFetching,
  getPageUsersCount,
  getTotalUserCount,
  getUsers
} from "../../redux/selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageUsersCount)
  }

  onPageChange = page => {
    this.props.setCurrentPage(page)
    this.props.getUsers(page, this.props.pageUsersCount)
  }

  render() {
    return (
      <>
        {
          this.props.isFetching ? <Preloader/> : null
        }
        <Users totalUsersCount={this.props.totalUsersCount}
               pageUsersCount={this.props.pageUsersCount}
               currentPage={this.props.currentPage}
               users={this.props.users}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               onPageChange={this.onPageChange}
               btnFolllowDisabled={this.props.btnFolllowDisabled}
        />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    totalUsersCount: getTotalUserCount(state),
    pageUsersCount: getPageUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    btnFolllowDisabled: getBtnFolllowDisabled(state)
  }
}


export default connect(mapStateToProps,{follow, unfollow,setCurrentPage,getUsers: requestUsers})(UsersContainer)