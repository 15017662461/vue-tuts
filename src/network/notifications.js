import axios from './index'

export function getNotifications(){
  return axios.post('/api/v1/notifications')
}