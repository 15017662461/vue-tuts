import axios from './index'

export function getArticleList (){
  return axios.post('/api/v1/articleList')
}

export function delArticle (id){
  return axios.post(`/api/v1/articleDelete/${id}`);
}

export function getArticle(id){
  return axios.post(`/api/v1/article/${id}`);
}

