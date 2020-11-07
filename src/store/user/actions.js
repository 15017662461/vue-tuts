import {login} from '@/network/login.js'
export const actions = {
  login(context,payload){
    login(payload.user,payload.password).then(resp => {
      // console.log(resp)
      // console.log(payload.user)
      // console.log(this)
      return new Promise((resolve,reject) =>{
        context.commit("toLogin",resp.data);
        resolve();
      })
    })
  }
}