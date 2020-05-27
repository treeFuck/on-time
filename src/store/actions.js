import { getOpenid, login } from "../api/login"

const actions = {
    async Login({ commit }, userInfo) {
        try {
            //通过云函数获取openid
            const openid = await getOpenid()
            userInfo = { ...userInfo, openid }
            login(userInfo)
            commit('SET_USERINFO', userInfo)
            //将用户信息保存到localStroage
            wx.setStorage({
                key: 'userInfo',
                data: userInfo
            })
        } catch (error) {
            console.error(error)
        }
    }
}

export default actions