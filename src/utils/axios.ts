import axios from 'axios'

import { getToken } from './localstorage'

const instance = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 4000,
})

export default instance

instance.interceptors.request.use(
  (config) => {
    const token = getToken()

    if (token) config.headers.Authorization = `Bearer ${token}`

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
