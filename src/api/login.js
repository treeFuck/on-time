import request from '../utils/request'

export function login({ nickName, avatarUrl }) {
  return request({
    url: '/login',
    method: 'post',
    params: { nickName, avatarUrl }
  })
}

export function getInfo() {
  return request({
    url: 'getInfo',
    method: 'get'
  })
}