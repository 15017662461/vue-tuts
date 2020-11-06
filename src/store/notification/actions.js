import {getNotifications} from '@/network/notifications.js'
export const  actions = {
  getNotifications(context){
    getNotifications().then(resp => {
      context.commit("setNotificationLists",resp.data.lists)
    })
  },
  markRead(context,id){
    return new Promise((resolve,reject) => {
      setTimeout(() =>{
        context.commit("toRead",id)
        resolve();
      },1200)
    })
  },
  markReadAll(context){
    return new Promise((resolve,reject) =>{
      setTimeout(() =>{
        context.commit("toReadAll")
        resolve();
      },2000)
    })
  }
}