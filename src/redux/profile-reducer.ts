import {profileAPI} from "../api/api";
import {PhotosType, PostType, UserProfileType} from "../types/types";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SET_PROFILE_PHOTO = 'profilePage/SET_PROFILE_PHOTO'
const SET_OWNER_PROFILE = 'profilePage/SET_OWNER_PROFILE'



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
  ] as Array<PostType>,
  ownerProfile: null as UserProfileType | null,
  userProfile: null as UserProfileType | null,
  status: null as string | null,
  newPostText: null as string | null
}

type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): initialStateType => {
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
    case SET_OWNER_PROFILE: {
      return {
        ...state,
        ownerProfile: action.userProfile
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


export const addPost = (newPostText: string) => ({type: ADD_POST, newPostText})
export const setUserProfile = (userProfile: UserProfileType, isOwner: boolean = false) => {
  return isOwner
    ? {type: SET_OWNER_PROFILE, userProfile}
    : {type: SET_USER_PROFILE, userProfile}
}

const setStatus = (status: string) => ({type: SET_STATUS, status})
const setProfilePhotoSuccess = (photos: PhotosType) => ({type: SET_PROFILE_PHOTO, photos})


export const getProfile = (userId: number, isOwner = false) => async (dispatch: any) => {
  const data = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(data, isOwner))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getStatus(userId)
  if (response.status === 200) dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
  const response = await profileAPI.updateStatus(status)
  if (response.status === 200) dispatch(setStatus(status))
}

export const setProfilePhoto = (photo: PhotosType) => async (dispatch: any) => {
  const response = await profileAPI.updateProfilePhoto(photo)
  dispatch(setProfilePhotoSuccess(response))
}

export const updateProfileInfo = (profileInfo: any) => async (dispatch: any, getState: any) => {     //FIX ANY
  const userId = getState().auth.id
  const response = await profileAPI.updateProfileInfo(profileInfo)
  if (response.data.resultCode === 0) dispatch(getProfile(userId))
}


export default profileReducer