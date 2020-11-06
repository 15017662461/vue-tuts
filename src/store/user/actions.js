import {login} from '@/network/login.js'
export const actions = {
  login(context,payload){
    login(payload.user,payload.password).then(resp => {
      // console.log(resp)
      context.commit("toLogin",resp.data)
    })
  }
}