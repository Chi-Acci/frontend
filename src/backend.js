import axios from 'axios'

export const httpBackend = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 1000
})

export function wsBackend (route) {
  return new WebSocket(`${process.env.VUE_APP_WS}${route}`)
}
