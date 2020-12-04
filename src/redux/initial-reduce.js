import {authMe} from "./auth-reducer";

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

export const initializeApp = () => async dispatch => {
  await Promise.all([dispatch(authMe())])
  dispatch({type: INITIALIZE_APP})
}

export default initialReducer