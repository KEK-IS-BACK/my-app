import {authMe} from "./auth-reducer";
import {getProfile} from "./profile-reducer";

const INITIALIZE_APP = 'INITIALIZE_APP'

const initialState = {
  isAppInitialized: false
}

const initialReducer = (state = initialState, action) => {
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

export const initializeApp = () => async (dispatch, getState) => {
  await Promise.all([
    dispatch(authMe())
  ])
  const state = getState()
  if(state.auth.isAuth) {
    await dispatch(getProfile(state.auth.id, true))
  }
  dispatch({type: INITIALIZE_APP})
  console.log("State проинизиализрован")
}

export default initialReducer