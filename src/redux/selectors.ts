import {AppStateType} from "./redux-store";

export const getUsers = (state: AppStateType) => {
  return state.usersPage.users
}

export const getTotalUserCount = (state: AppStateType) => {
  return state.usersPage.totalUsersCount
}

export const getPageUsersCount = (state: AppStateType) => {
  return state.usersPage.pageUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching
}

export const getBtnFolllowDisabled = (state: AppStateType) => {
  return state.usersPage.btnFolllowDisabled
}

/////////AUTH//////////

export const getIsAuth = (state: AppStateType) => {
  return state.auth.isAuth
}

export const getAuthUserId = (state: AppStateType) => {
  return state.auth.id
}

export const getLogin = (state: AppStateType) => {
  return state.auth.login
}

export const getCaptchaUrl = (state: AppStateType) => {
  return state.auth.captchaUrl
}

///////////Profile////////////

export const getProfilePhotos = (state: AppStateType) => {
  return state.profilePage.userProfile?.photos
}

export const getSmallOwnerPhoto = (state: AppStateType) => {
  return state.profilePage.ownerProfile ? state.profilePage.ownerProfile.photos.small : undefined
}

export const getProfilePosts = (state: AppStateType) => {
  return state.profilePage.posts
}