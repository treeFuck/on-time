import axios from '../../node_modules/axios/dist/axios'
import qs from 'qs'
import store from '../store'

const NewTimeStamp = new Date().getTime()

// 创建axios实例
const Axios  = axios.create({
  baseURL: 'http://47.102.155.74:8080/', // 设置请求域名地址
  timeout: 1000 * 60, // 设置请求超时时间
  responseType: 'json' // 设置返回值类型
})


// 然后使用Axios实例的adapter进行封装微信请求
Axios.defaults.adapter = (config) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: Axios.defaults.baseURL+ config.url,
      method: config.method,
      header: {
        'Content-type': 'application/json'
      },
      data: config.params,
      success: (res) => (resolve(res)),
      fail: (err) => (reject(err))
    })
  })
}

// 请求拦截
Axios.interceptors.request.use((request) => {
  console.log(request)
  return request
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截
Axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

// 导出响应的方法
export default function fetch(options) {
  return new Promise((resolve, reject) => {
    Axios(options)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

