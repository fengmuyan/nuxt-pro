/* eslint-disable */
import axios from 'axios'
const server = axios.create({
  baseURL: 'http://www.saikang.top',
  timeout: 8000,
});
server.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
server.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

server.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export function $get(url, params) {
  return new Promise((resolve, reject) => {
    server.get(url, params)
      .then(res => {
        resolve(res.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function $post(url, params) {
  return new Promise((resolve, reject) => {
    server.post(url, params)
      .then(res => {
        resolve(res.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default ({
  test(data = {}) {
    return $post('/api/user/getUser', data)
  }
})