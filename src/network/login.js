import axios from './index'

export function login(username,password){
  return axios.post(`/api/v1/login`,{username,password})
}