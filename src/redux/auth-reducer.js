import {authARI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
const DELETE_USER_DATA = 'DELETE_USER_DATA'

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    case DELETE_USER_DATA:
      return {
        ...state,
        id: null,
        login: null,
        email: null,
        isAuth: false
      }
    default :
      return state
  }
}

export const setAuthUserData = (id, login, email) => ({type: SET_USER_DATA, data: {id, login, email}})
export const deleteAuthUserData = () => ({type: DELETE_USER_DATA})


export const authMe = () => async dispatch => {
  const data = await authARI.authMe()

  let {id, login, email} = data.data
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(id, login, email))
  }
}

export const login = (email, pass, rememberMe) => async dispatch => {
  const response = await authARI.login(email, pass, rememberMe)

  if (response.data.resultCode === 0) {
    dispatch(authMe())
  } else {
    dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
  }
}

export const logout = () => async dispatch => {
  const response = await authARI.logout()

  if (response.data.resultCode === 0) {
    dispatch(deleteAuthUserData())
  }
}

export default authReducer