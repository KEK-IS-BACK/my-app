import {followAPI, usersAPI} from "../api/api";
import {updateObjInArray} from "../utils/obect-helpers";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_PAGE_USERS_COUNT = 'SET_PAGE_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_BTN_FOLLOW_DISABLED = 'TOGGLE_BTN_FOLLOW_DISABLED'

const initialState = {
  users: [],
  totalUsersCount: 0,
  pageUsersCount: 8,
  currentPage: 1,
  isFetching: true,
  btnFolllowDisabled: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {

      return {
        ...state,
        users: updateObjInArray(state.users, 'id', action.userId, {followed: true})
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: updateObjInArray(state.users, 'id', action.userId, {followed: false})
      }
    }
    case SET_USERS :
      return {
        ...state,
        users: [...action.users]
      }
    case SET_PAGE_USERS_COUNT :
      return {
        ...state,
        pageUsersCount: action.count
      }
    case SET_TOTAL_USERS_COUNT :
      return {
        ...state,
        totalUsersCount: action.count
      }
    case SET_CURRENT_PAGE :
      return {
        ...state,
        currentPage: action.currentPage
      }
    case TOGGLE_IS_FETCHING :
      return {
        ...state,
        isFetching: action.isFetching
      }
    case TOGGLE_BTN_FOLLOW_DISABLED :
      return {
        ...state,
        btnFolllowDisabled:
          action.value
            ? [...state.btnFolllowDisabled, action.userId]
            : state.btnFolllowDisabled.filter(item => item !== action.userId)
      }
    default:
      return state
  }
}

export const followSuccess = userId => ({type: FOLLOW, userId: userId})
export const unfollowSuccess = userId => ({type: UNFOLLOW, userId: userId})
export const setUsers = users => ({type: SET_USERS, users: users})
export const setTotalUsersCount = count => ({type: SET_TOTAL_USERS_COUNT, count})
export const setPageUsersCount = count => ({type: SET_PAGE_USERS_COUNT, count})
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage})
export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleBtnFolllowDisabled = (userId, value) => ({type: TOGGLE_BTN_FOLLOW_DISABLED, userId, value})

export const requestUsers = (currentPage, pageUsersCount) => async dispatch => {
  dispatch(toggleIsFetching(true))
  const data = await usersAPI.getUsers(currentPage, pageUsersCount)
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))
  dispatch(toggleIsFetching(false))

}

const folowUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleBtnFolllowDisabled(userId, true))
  const data = await apiMethod
  if (data.resultCode === 0) dispatch(actionCreator)
  dispatch(toggleBtnFolllowDisabled(userId, false))
}

export const follow = userId => dispatch => {
  folowUnfollowFlow(dispatch, userId, followAPI.follow(userId), followSuccess(userId))
}

export const unfollow = userId => dispatch => {
  folowUnfollowFlow(dispatch, userId, followAPI.unfollow(userId), unfollowSuccess(userId))
}


export default usersReducer