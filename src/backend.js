import axios from 'axios'

export const httpBackend = axios.create({
  baseURL: `api/`,
  timeout: 1000
})

export function wsBackend (route) {
  return new WebSocket(`ws://${location.host}/ws/${route}`)
}
