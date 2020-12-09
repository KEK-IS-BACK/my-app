import {authARI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getProfile} from "./profile-reducer";

const SET_USER_DATA = 'SET_USER_DATA'
const DELETE_USER_DATA = 'DELETE_USER_DATA'
const SET_CAPTCHA_URL_SUCCESS = 'SET_CAPTCHA_URL_SUCCESS'

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null
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
    case SET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        captchaUrl: action.captchaUrl
      }
    default :
      return state
  }
}

export const setAuthUserData = (id, login, email) => ({type: SET_USER_DATA, data: {id, login, email}})
export const deleteAuthUserData = () => ({type: DELETE_USER_DATA})
const setCaptchaSuccess = (captchaUrl) => ({type: SET_CAPTCHA_URL_SUCCESS, captchaUrl})


export const authMe = () => async dispatch => {
  const data = await authARI.authMe()

  let {id, login, email} = data.data
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(id, login, email))
  }
}

export const login = (email, pass, rememberMe, captcha) => async (dispatch, getState) => {
  const response = await authARI.login(email, pass, rememberMe, captcha)
  if (response.data.resultCode === 0) {
    dispatch(authMe())
    dispatch(getProfile(getState().auth.id, true))
  } else {
    if (response.data.resultCode === 10) {
      dispatch(setCaptcha())
    }
    dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
  }
}

export const logout = () => async dispatch => {
  const response = await authARI.logout()

  if (response.data.resultCode === 0) {
    dispatch(deleteAuthUserData())
  }
}

export const setCaptcha = () => async dispatch => {
  const response = await authARI.getCaptchaUrl()
  dispatch(setCaptchaSuccess(response.data.url))
}

export default authReducer