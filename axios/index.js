import axios from 'axios'
axios.defaults.baseURL = 'http://api.jx.com'
axios.defaults.withCredentials = false
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'

// 封装post
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
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

// 封装get方法
export function get(url) {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default ({
  /* 主页接口 */
  getIndexData(data = {}) {
    return post('/front/front/index', data)
  },
  /* 密码登陆 */
  passwordLogin(data = {}) {
    return post('/user/login', data)
  },

})