import request from '../utils/request'

export function login({ nickName, avatarUrl, openid }) {
  return request({
    url: '/login',
    method: 'post',
    params: { nickName, avatarUrl, openid }
  })
}

export function getInfo() {
  return request({
    url: 'getInfo',
    method: 'get'
  })
}

export async function getOpenid() {
  try {
    const result = await wx.cloud.callFunction({
      name: "getOpenid"
    });
    return result.result.openid
  } catch (error) {
    console.log('getOpenid报错： '+ error);
  }
}