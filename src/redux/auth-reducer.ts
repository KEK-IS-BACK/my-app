import {authARI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getProfile} from "./profile-reducer";

const SET_USER_DATA = 'SET_USER_DATA'
const DELETE_USER_DATA = 'DELETE_USER_DATA'
const SET_CAPTCHA_URL_SUCCESS = 'SET_CAPTCHA_URL_SUCCESS'

const initialState = {
  id: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false as boolean | null,
  captchaUrl: null as string | null
}

type initialStateType = typeof initialState

const authReducer = (state = initialState, action: any): initialStateType => {
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

type setAuthUserDataType = {
  type: typeof SET_USER_DATA
  data: {
    id: number
    login: string
    email: string
  }
}
export const setAuthUserData = (id: number, login: string, email: string): setAuthUserDataType => ({
  type: SET_USER_DATA,
  data: {id, login, email}
})

type deleteAuthUserData = {
  type: typeof DELETE_USER_DATA
}
export const deleteAuthUserData = (): deleteAuthUserData => ({type: DELETE_USER_DATA})


type setCaptchaSuccessType = {
  type: typeof SET_CAPTCHA_URL_SUCCESS
  captchaUrl: string
}
const setCaptchaSuccess = (captchaUrl: string): setCaptchaSuccessType => ({type: SET_CAPTCHA_URL_SUCCESS, captchaUrl})


export const authMe = () => async (dispatch: any) => {
  const data = await authARI.authMe()

  let {id, login, email} = data.data
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(id, login, email))
  } else if (data.resultCode === 403) {
    dispatch(logout)
  }
}

export const login = (email: string, pass: string, rememberMe: boolean, captcha: string) => async (dispatch: any, getState: any) => {
  const response = await authARI.login(email, pass, rememberMe, captcha)
  if (response.data.resultCode === 0) {
    dispatch(authMe())
    await dispatch(getProfile(getState().auth.id, true))
  } else {
    if (response.data.resultCode === 10) {
      dispatch(setCaptcha())
    }
    dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
  }
}

export const logout = () => async (dispatch: any) => {
  const response = await authARI.logout()

  if (response.data.resultCode === 0) {
    dispatch(deleteAuthUserData())
  }
}

export const setCaptcha = () => async (dispatch: any) => {
  const response = await authARI.getCaptchaUrl()
  dispatch(setCaptchaSuccess(response.data.url))
}

export default authReducer