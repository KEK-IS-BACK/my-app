export const getUsers = state => {
  return state.usersPage.users
}

export const getTotalUserCount = state => {
  return state.usersPage.totalUsersCount
}

export const getPageUsersCount = state => {
  return state.usersPage.pageUsersCount
}

export const getCurrentPage = state => {
  return state.usersPage.currentPage
}

export const getIsFetching = state => {
  return state.usersPage.isFetching
}

export const getBtnFolllowDisabled = state => {
  return state.usersPage.btnFolllowDisabled
}

/////////AUTH//////////

export const getIsAuth = state => {
  return state.auth.isAuth
}


export const getAuthUserId = state => {
  return state.auth.id
}

export const getCaptchaUrl = state => {
  return state.auth.captchaUrl
}

///////////Profile////////////

export const getProfilePhotos = state => {
  return state.profilePage.userProfile.photos
}

export  const getSmallOwnerPhoto = state => {
  return state.profilePage.ownerProfile? state.profilePage.ownerProfile.photos.small : undefined
}