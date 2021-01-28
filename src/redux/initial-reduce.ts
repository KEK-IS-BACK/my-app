import {authMe} from "./auth-reducer";
import {getProfile} from "./profile-reducer";

const INITIALIZE_APP = 'INITIALIZE_APP'

export type initialStateType = {
  isAppInitialized: boolean
}

const initialState: initialStateType = {
  isAppInitialized: false
}

const initialReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case INITIALIZE_APP:
      return {
        ...state,
        isAppInitialized: true
      }
    default:
      return state
  }
}

export const initializeApp = () => async (dispatch: any, getState: any) => {
  // await Promise.all([
  //   dispatch(authMe())
  // ])

  await dispatch(authMe())

  const state = getState()
  if (state.auth.isAuth) {
    await dispatch(getProfile(state.auth.id, true))
  }

  dispatch({type: INITIALIZE_APP})
}

export default initialReducer