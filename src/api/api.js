import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '9cfdc4f8-f287-4482-a7ea-6b214b714025'
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageUsersCount = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageUsersCount}`)
      .then(response => response.data)
  }
}

export const followAPI = {
  follow(userId) {
    return instance.post('follow/' + userId).then(response => response.data)
  },
  unfollow(userId) {
    return instance.delete('follow/' + userId).then(response => response.data)
  }
}

export const authARI = {
  authMe () {
    return instance.get('auth/me').then(response => response.data)
  },

  login (email, password, rememberMe = false, captcha = null) {
    return instance.post('auth/login', {email,password,rememberMe, captcha})
  },

  logout() {
    return instance.delete('auth/login')
  },

  getCaptchaUrl() {
    return instance.get('security/get-captcha-url')
  }
}

export const profileAPI = {
  getProfile (userId) {
    return instance.get('profile/' + userId).then(response => response.data)
  },

  getStatus (userId) {
    return instance.get('profile/status/' + userId)
  },

  updateStatus (status) {
    return instance.put('profile/status/', {status: status})
  },

  updateProfilePhoto (filePhoto) {
    const data = new FormData()
    data.append('image', filePhoto)
    return instance.put('profile/photo', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },

  updateProfileInfo (profileInfo) {
    return instance.put('profile/', profileInfo)
  }
}