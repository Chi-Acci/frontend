import Vue from 'vue'
import Vuex from 'vuex'
import {
  G_USERNAME,
  M_USERNAME,
  G_ROOM_IS_LOADED, G_ROOM_STATUS,
  G_ROOM_USERS, G_ROOM_MOVIES,
  G_NEXT_MOVIE,
  G_ROOM_RESULTS,
  M_ROOM,
  A_CREATE_ROOM, A_JOIN_ROOM, A_GET_ROOM, A_RATE_MOVIE
} from './constants'
import { roomData } from '../assets/dev'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: localStorage.getItem('username') || undefined,
    room: undefined
  },
  getters: {
    [G_USERNAME]: state => state.username,
    [G_ROOM_IS_LOADED]: state => !!state.room,
    [G_ROOM_STATUS]: state => state.room ? state.room.status : '',
    [G_ROOM_USERS]: state => state.room ? state.room.users : [],
    [G_ROOM_MOVIES]: state => state.room ? state.room.movies : [],
    [G_NEXT_MOVIE]: (state, getters) => {
      return getters.G_ROOM_MOVIES.find(movie => movie.rating === undefined)
    },
    [G_ROOM_RESULTS]: state => state.room ? state.room.results : undefined
  },
  mutations: {
    [M_USERNAME]: (state, username) => {
      state.username = username
      localStorage.setItem('username', username)
    },
    [M_ROOM]: (state, room) => {
      state.room = room
    }
  },
  actions: {
    [A_CREATE_ROOM]: ({ commit, getters }, roomSlug) => new Promise((resolve) => {
      const data = roomData
      data.slug = roomSlug
      data.admin = getters[G_USERNAME]
      commit(M_ROOM, data)
      resolve()
    }),
    [A_JOIN_ROOM]: ({ commit, getters }, roomSlug) => new Promise((resolve) => {
      const data = roomData
      data.slug = roomSlug
      commit(M_ROOM, data)
      resolve()
    }),
    [A_GET_ROOM]: ({ commit, getters }, roomSlug) => new Promise((resolve) => {
      const data = roomData
      data.slug = roomSlug
      commit(M_ROOM, data)
      resolve()
    }),
    [A_RATE_MOVIE]: ({ commit, getters }, movieData) => new Promise((resolve) => {
      getters.G_ROOM_MOVIES.shift()
      resolve()
    })
  }
})
