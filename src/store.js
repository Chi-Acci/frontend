import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: localStorage.getItem('username') || undefined
  },
  getters: {
    G_USERNAME: state => state.username
  },
  mutations: {
    M_USERNAME: (state, username) => {
      state.username = username
      localStorage.setItem('username', username)
    }
  },
  actions: {
  }
})
