import {getNotifications} from '@/network/notifications.js'
export const  actions = {
  getNotifications(context){
    getNotifications().then(resp => {
      context.commit("setNotificationLists",resp.data.lists)
    })
  }
}