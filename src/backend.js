import axios from 'axios'

const backend = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 1000
})

export default backend
