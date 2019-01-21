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

const roomsUrl = 'rooms'

export default new Vuex.Store({
  state: {
    username: localStorage.getItem('username') || undefined,
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
      return getters[G_ROOM_MOVIES].find(movie => movie.rating === undefined)
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
    [A_CREATE_USER]: ({ commit, getters }, username) => new Promise((resolve) => {
      //
    }),
    [A_CREATE_ROOM]: ({ commit }, room) => new Promise((resolve, reject) => {
      backend.post(roomsUrl, room)
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
      backend.patch(`${roomsUrl}/${roomSlug}/join`)
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
      backend.get(`${roomsUrl}/${roomSlug}`)
        .then(response => {
          commit(M_ROOM, response.data)
          resolve()
        })
        .catch(err => {
          commit(M_ROOM_CLEAR)
          reject(err)
        })
    }),
    [A_RATE_MOVIE]: ({ commit, getters }, movieData) => new Promise((resolve) => {
      getters.G_ROOM_MOVIES.shift()
      resolve()
    })
  }
})
