import {followAPI, usersAPI} from "../api/api";
import {updateObjInArray} from "../utils/obect-helpers";
import {PhotosType} from "../types/types";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_PAGE_USERS_COUNT = 'SET_PAGE_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_BTN_FOLLOW_DISABLED = 'TOGGLE_BTN_FOLLOW_DISABLED'

export type UserType = {
  name: string
  id: number
  photos: PhotosType
  status: string
  followed: boolean
}

const initialState = {
  users: [] as Array<UserType>,
  totalUsersCount: 0,
  pageUsersCount: 8,
  currentPage: 1,
  isFetching: true,
  btnFolllowDisabled: [] as Array<number>
}

type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): initialStateType => {
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
type followSuccessType = {
  type: typeof FOLLOW
  userId: number
}
export const followSuccess = (userId: number): followSuccessType => ({type: FOLLOW, userId: userId})
type unfollowSuccessType = {
  type: typeof UNFOLLOW
  userId: number
}
export const unfollowSuccess = (userId: number): unfollowSuccessType => ({type: UNFOLLOW, userId: userId})
type setUsersType = {
  type: typeof SET_USERS
  users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): setUsersType => ({type: SET_USERS, users: users})
type setTotalUsersCountType = {
  type: typeof SET_TOTAL_USERS_COUNT
  count: number
}
export const setTotalUsersCount = (count: number): setTotalUsersCountType => ({type: SET_TOTAL_USERS_COUNT, count})
type setPageUsersCountType = {
  type: typeof SET_PAGE_USERS_COUNT
  count: number
}
export const setPageUsersCount = (count: number): setPageUsersCountType => ({type: SET_PAGE_USERS_COUNT, count})
type setCurrentPageType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage: number): setCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage})
type toggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})
type toggleBtnFolllowDisabledType = {
  type: typeof TOGGLE_BTN_FOLLOW_DISABLED,
  userId: number
  value: boolean
}
export const toggleBtnFolllowDisabled = (userId: number, value: boolean): toggleBtnFolllowDisabledType => ({
  type: TOGGLE_BTN_FOLLOW_DISABLED,
  userId,
  value
})

export const requestUsers = (currentPage: number, pageUsersCount: number) => async (dispatch: any) => {
  dispatch(toggleIsFetching(true))
  const data = await usersAPI.getUsers(currentPage, pageUsersCount)
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))
  dispatch(toggleIsFetching(false))

}

const folowUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => { //FIX ANY
  dispatch(toggleBtnFolllowDisabled(userId, true))
  const data = await apiMethod
  if (data.resultCode === 0) dispatch(actionCreator)
  dispatch(toggleBtnFolllowDisabled(userId, false))
}

export const follow = (userId: number) => (dispatch: any) => {
  folowUnfollowFlow(dispatch, userId, followAPI.follow(userId), followSuccess(userId))
}

export const unfollow = (userId: number) => (dispatch: any) => {
  folowUnfollowFlow(dispatch, userId, followAPI.unfollow(userId), unfollowSuccess(userId))
}


export default usersReducer