import Vue from 'vue'
import Vuex from 'vuex'
import {
  G_USERNAME, G_TOKEN,
  M_USERNAME, M_TOKEN, M_TOKEN_CLEAR,
  A_CREATE_USER,
  G_ROOM_IS_LOADED, G_ROOM_STATUS,
  G_ROOM_USERS, G_ROOM_MOVIES,
  G_NEXT_MOVIE,
  G_ROOM_RESULTS_READY, G_ROOM_RESULTS, G_ROOM_RESULTS_ARE_LOADED,
  G_ROOM_UNRATED_MOVIES,
  M_ROOM, M_ROOM_CLEAR, M_ROOM_RESULTS, M_ROOM_RESULTS_CLEAR,
  A_CREATE_ROOM, A_JOIN_ROOM, A_GET_ROOM, A_GET_ROOM_RESULTS,
  M_WS_INIT, M_WS_CLOSED, M_WS_ONMESSAGE,
  A_WS_CONNECT, A_WS_CLOSE, A_WS_SEND, A_WS_SEND_UPDATE,
  A_RATE_MOVIE,
  A_SESSION_RESET
} from './constants'
import { httpBackend, wsBackend } from '../backend'

Vue.use(Vuex)

const USERS_URL = 'users'
const ROOMS_URL = 'rooms'
const RATINGS_URL = 'ratings'

export default new Vuex.Store({
  state: {
    username: localStorage.getItem('username') || undefined,
    token: localStorage.getItem('token') || undefined,
    room: undefined,
    results: undefined,
    // web socket
    ws: undefined,
    wsUsers: [],
    wsResults: []
  },
  getters: {
    [G_USERNAME]: state => state.username,
    [G_TOKEN]: state => state.token,
    [G_ROOM_IS_LOADED]: state => state.room !== undefined,
    [G_ROOM_STATUS]: state => state.room ? state.room.status : '',
    [G_ROOM_USERS]: state => state.wsUsers,
    [G_ROOM_MOVIES]: state => state.room ? state.room.movies : [],
    [G_ROOM_UNRATED_MOVIES]: state => {
      return state.room
        ? state.room.unrated_movies ? state.room.unrated_movies : []
        : []
    },
    [G_NEXT_MOVIE]: (state, getters) => {
      return getters[G_ROOM_UNRATED_MOVIES][0]
    },
    [G_ROOM_RESULTS_READY]: (state, getters) => {
      return state.room
        ? !getters[G_ROOM_USERS].find(user => user.rated_count < getters[G_ROOM_MOVIES].length)
        : false
    },
    [G_ROOM_RESULTS]: (state) => state.wsResults.length > 0 ? state.wsResults : [],
    [G_ROOM_RESULTS_ARE_LOADED]: (state) => state.wsResults.length > 0
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
    },
    [M_ROOM_CLEAR]: (state) => {
      state.room = undefined
      state.wsUsers = []
    },
    [M_ROOM_RESULTS]: (state, results) => {
      state.results = results
    },
    [M_ROOM_RESULTS_CLEAR]: (state) => {
      state.results = undefined
      state.wsResults = []
    },
    [M_WS_INIT]: (state, ws) => {
      state.ws = ws
    },
    [M_WS_CLOSED]: (state) => {
      console.log(M_WS_CLOSED)
      state.wsConnected = false
      state.wsUsers = []
      state.wsResults = []
    },
    [M_WS_ONMESSAGE]: (state, msg) => {
      // different mutations
      console.log(M_WS_ONMESSAGE, msg)
      if ('users' in msg) {
        state.wsUsers = msg.users
      }
      if ('results' in msg) {
        state.wsResults = msg.results
      }
    }
  },
  actions: {
    [A_CREATE_USER]: ({ commit, getters }, name) => new Promise((resolve, reject) => {
      httpBackend.post(USERS_URL, { name: name })
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
      httpBackend.post(ROOMS_URL, room)
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
      httpBackend.patch(`${ROOMS_URL}/${roomSlug}/join`)
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
      httpBackend.get(`${ROOMS_URL}/${roomSlug}`)
        .then(response => {
          commit(M_ROOM, response.data)
          resolve()
        })
        .catch(err => {
          commit(M_ROOM_CLEAR)
          reject(err)
        })
    }),
    [A_GET_ROOM_RESULTS]: ({ commit }, roomSlug) => new Promise((resolve, reject) => {
      httpBackend.get(`${ROOMS_URL}/${roomSlug}/results`)
        .then(response => {
          commit(M_ROOM_RESULTS, response.data)
          resolve()
        })
        .catch(err => {
          commit(M_ROOM_RESULTS_CLEAR)
          reject(err)
        })
    }),
    [A_WS_CONNECT]: ({ getters, commit }, roomSlug) => new Promise((resolve, reject) => {
      const ws = wsBackend(`rooms/${roomSlug}/?JWT=${getters[G_TOKEN]}`)
      ws.onopen = () => {
        commit(M_WS_INIT, ws)
        ws.onmessage = (msg) => { commit(M_WS_ONMESSAGE, JSON.parse(msg.data)) }
        ws.onclose = () => { commit(M_WS_CLOSED) }
        resolve()
      }
      ws.onerror = (err) => { reject(err) }
    }),
    [A_WS_CLOSE]: ({ state }) => {
      if (state.ws) { state.ws.close() }
    },
    [A_WS_SEND]: ({ state }, msg) => {
      console.log(A_WS_SEND, msg)
      state.ws.send(JSON.stringify(msg))
    },
    [A_WS_SEND_UPDATE]: ({ dispatch }) => {
      dispatch(A_WS_SEND, { 'type': 'user.update' })
    },
    [A_RATE_MOVIE]: ({ commit, getters }, ratingData) => new Promise((resolve, reject) => {
      httpBackend.post(RATINGS_URL, ratingData)
        .then(() => {
          getters[G_ROOM_UNRATED_MOVIES].shift()
          resolve()
        })
        .catch(err => { reject(err) })
    }),
    [A_SESSION_RESET]: ({ commit, dispatch }) => new Promise((resolve) => {
      commit(M_TOKEN_CLEAR)
      commit(M_ROOM_CLEAR)
      commit(M_ROOM_RESULTS_CLEAR)
      dispatch(A_WS_CLOSE)
      resolve()
    })
  }
})
