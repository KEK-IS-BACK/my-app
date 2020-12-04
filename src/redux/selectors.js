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

export const getAuthUserId = state => {
  return state.auth.id
}