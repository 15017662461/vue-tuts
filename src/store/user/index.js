import {actions} from './actions.js'
import {getters} from './getters.js'
import {mutations} from './mutations.js'

const userInfo = JSON.parse(window.localStorage.getItem('userInfo')) || JSON.parse(window.sessionStorage.getItem('userInfo'));
const isLogin = (
  Boolean(window.localStorage.getItem('authToken') || window.sessionStorage.getItem('authToken'))
)

export const user = {
  state:{
    ...userInfo,
    isLogin
  },
  getters,
  mutations,
  actions
} 