import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SET_PROFILE_PHOTO = 'profilePage/SET_PROFILE_PHOTO'

const initialState = {
  posts: [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, modi!',
      likeCount: 10
    }, {
      id: 2,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ' +
        'Fugiat molestiae quia provident animi, sapiente iure.',
      likeCount: 15
    }, {
      id: 3,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
        'Nemo sint est illo corrupti deserunt numquam dignissimos minus consequuntur eveniet doloremque.',
      likeCount: 20
    }
  ],
  userProfile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 0,
            text: action.newPostText,
            likeCount: 0
          }
        ],
        newPostText: ''
      }

    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        userProfile: action.userProfile
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    default:
      return state
  }
}


export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = userProfile => ({type: SET_USER_PROFILE, userProfile})
export const setStatus = status => ({type: SET_STATUS, status})
export const setProfilePhotoSuccess = photos => ({type: SET_PROFILE_PHOTO, photos})


export const getProfile = (userId) => async dispatch => {
  const data = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(data))
}

export const getStatus = (userId) => async dispatch => {
  const response = await profileAPI.getStatus(userId)
  if (response.status === 200) dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async dispatch => {
  const response = await profileAPI.updateStatus(status)
  if (response.status === 200) dispatch(setStatus(status))
}

export const setProfilePhoto = photo => async dispatch => {
  const response =await profileAPI.updateProfilePhoto(photo)
  dispatch(setProfilePhotoSuccess(response))
}


export default profileReducer