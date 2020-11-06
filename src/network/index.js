import axios from 'axios'

const instance1 = axios.create({
  baseURL:'http://rap2api.taobao.org/app/mock/268434',
  timeout:5000
})

instance1.interceptors.request.use(config => {
  return config;
},err => {
  return err;
})

instance1.interceptors.response.use(result => {
  return result.data;
},err => {
  return err;
})

export default instance1;