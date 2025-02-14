import axios from 'axios'

export const url = import.meta.env.VITE_BASE_URL

export const axiosInstance = axios.create({
  baseURL: url,
  headers: {
    'Content-type': 'application/json'
  }
})
