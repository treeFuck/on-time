import store from '../store/index'
// 接口地址
const host = 'http://47.102.155.74:8080'

// wx请求
function request(url, method, data) {
    let header = {
        'content-type': 'application/json' // 默认值
    }
    if (store.state.Authorization) {
        header.Authorization = store.state.Authorization
    }
    return new Promise((resolve, reject) => {
        wx.request({
            url: host + url,
            method: method,
            data: data,
            header: header,
            success: (res) => {
                console.log('微信对象', wx)
                if (res.data.code == 1) {
                    resolve(res);
                } else if (res.data.code == 3001) {
                    wx.showModal({
                        title: '登录过期',
                        content: '请重新登录',
                        showCancel: false,
                        success(res) {
                            wx.redirectTo({
                                url: '/pages/login/main'
                            })
                        }
                    })
                    reject('expire') // token过期
                }
            },
            fail: (res) => {
                reject(res)
            },
        })
    })
}

function get(obj) {
    return request(obj.url, 'GET', obj.params);
}

function post(obj) {
    return request(obj.url, 'POST', obj.params)
}

function put(obj) {
    return request(obj.url, 'PUT', obj.params)
}

function Delete(obj) {
    return request(obj.url, 'DELETE', obj.params)
}

export default {
    host,
    get,
    post,
    put,
    Delete
}