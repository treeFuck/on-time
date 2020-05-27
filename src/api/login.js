import request from '../utils/req'

export function login(userInfo) {
  return request.post({
    url: '/wx/login',
    params: userInfo
  })
}

export async function getOpenid() {
  console.log("getOpenid")
  try {
    const result = await wx.cloud.callFunction({
      name: "getOpenid"
    });
    return result.result.openid
  } catch (error) {
    console.log('getOpenid报错： ' + error);
  }
}
