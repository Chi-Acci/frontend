import backend from './backend'
import store from './store'
import { G_TOKEN } from './store/constants'

function preRequestAuth (config) {
  const token = store.getters[G_TOKEN]
  if (token) {
    config.headers.common.Authorization = `JWT ${token}` // eslint-disable-line no-param-reassign
  }
  return config
}

backend.interceptors.request.use(preRequestAuth)
