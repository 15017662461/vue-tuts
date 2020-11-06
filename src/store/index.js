import Vue from 'vue'
import Vuex from 'vuex'
import {notifications} from './notification/index'
import {user} from './user/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
  },
  actions: {
  },
  modules: {
    notifications:notifications,
    user:user
  }
})
