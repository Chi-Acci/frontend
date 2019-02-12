import axios from 'axios'

export const httpBackend = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 1000
})

export function wsBackend (route) {
  return new WebSocket(`ws://0.0.0.0:8000/ws/${route}`)
}
