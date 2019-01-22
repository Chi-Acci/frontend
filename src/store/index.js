import Vue from 'vue'
import Vuex from 'vuex'
import {
  G_USERNAME, G_TOKEN,
  M_USERNAME, M_TOKEN, M_TOKEN_CLEAR,
  A_CREATE_USER,
  G_ROOM_IS_LOADED, G_ROOM_STATUS,
  G_ROOM_USERS, G_ROOM_MOVIES,
  G_NEXT_MOVIE,
  G_ROOM_RESULTS,
  M_ROOM, M_ROOM_CLEAR,
  A_CREATE_ROOM, A_JOIN_ROOM, A_GET_ROOM, A_RATE_MOVIE
} from './constants'
import backend from '../backend'

Vue.use(Vuex)

const USERS_URL = 'users'
const ROOMS_URL = 'rooms'
const RATINGS_URL = 'ratings'

export default new Vuex.Store({
  state: {
    username: localStorage.getItem('username') || undefined,
    token: localStorage.getItem('token') || undefined,
    room: undefined
  },
  getters: {
    [G_USERNAME]: state => state.username,
    [G_TOKEN]: state => state.token,
    [G_ROOM_IS_LOADED]: state => state.room !== undefined,
    [G_ROOM_STATUS]: state => state.room ? state.room.status : '',
    [G_ROOM_USERS]: state => state.room ? state.room.users : [],
    [G_ROOM_MOVIES]: state => state.room ? state.room.movies : [],
    [G_NEXT_MOVIE]: (state, getters) => {
      console.log(getters[G_ROOM_MOVIES])
      return getters[G_ROOM_MOVIES].find(movie => movie.score === 0)
    },
    [G_ROOM_RESULTS]: state => state.room ? state.room.results : undefined
  },
  mutations: {
    [M_USERNAME]: (state, username) => {
      state.username = username
      localStorage.setItem('username', username)
    },
    [M_TOKEN]: (state, token) => {
      state.token = token
      localStorage.setItem('token', token)
    },
    [M_TOKEN_CLEAR]: (state) => {
      state.token = undefined
      localStorage.removeItem('token')
    },
    [M_ROOM]: (state, room) => {
      state.room = room
    }
  },
  actions: {
    [A_CREATE_USER]: ({ commit, getters }, name) => new Promise((resolve, reject) => {
      backend.post(USERS_URL, { name: name })
        .then(response => {
          commit(M_TOKEN, response.data.token)
          commit(M_USERNAME, response.data.name)
          resolve()
        })
        .catch(err => {
          commit(M_TOKEN_CLEAR)
          reject(err)
        })
    }),
    [A_CREATE_ROOM]: ({ commit }, room) => new Promise((resolve, reject) => {
      backend.post(ROOMS_URL, room)
        .then(response => {
          commit(M_ROOM, response.data)
          resolve()
        })
        .catch(err => {
          commit(M_ROOM_CLEAR)
          reject(err)
        })
    }),
    [A_JOIN_ROOM]: ({ commit }, roomSlug) => new Promise((resolve, reject) => {
      backend.patch(`${ROOMS_URL}/${roomSlug}/join`)
        .then(response => {
          commit(M_ROOM, response.data)
          resolve()
        })
        .catch(err => {
          commit(M_ROOM_CLEAR)
          reject(err)
        })
    }),
    [A_GET_ROOM]: ({ commit }, roomSlug) => new Promise((resolve, reject) => {
      backend.get(`${ROOMS_URL}/${roomSlug}`)
        .then(response => {
          commit(M_ROOM, response.data)
          resolve()
        })
        .catch(err => {
          commit(M_ROOM_CLEAR)
          reject(err)
        })
    }),
    [A_RATE_MOVIE]: ({ commit, getters }, ratingData) => new Promise((resolve, reject) => {
      console.log(ratingData)
      backend.post(RATINGS_URL, ratingData)
        .then(response => {
          console.warn(response.data.movie)
          const index = getters[G_ROOM_MOVIES].findIndex(movie => movie.id === response.data.movie)
          const m = getters[G_ROOM_MOVIES][index]
          m.score = response.data.score
          console.log(getters[G_ROOM_MOVIES][index])
          // getters.G_ROOM_MOVIES.shift()
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  }
})
