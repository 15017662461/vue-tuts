import Vue from 'vue'
import Vuex from 'vuex'
import {notifications} from './notification/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
  },
  actions: {
  },
  modules: {
    notifications:notifications
  }
})
