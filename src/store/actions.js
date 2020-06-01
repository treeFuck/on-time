import { getOpenid, login } from "../api/login"

const actions = {
    async Login({ commit }, userInfo) {
        try {
            // 通过云函数获取openid
            const openid = await getOpenid()
           
            // 请求token
            const res = await login({
                "openId": openid,
                "name": userInfo.nickName,
                "wechatIcon": userInfo.avatarUrl
            });

            // 保存用户信息、token到vuex
            commit('SET_USERINFO', { ...userInfo, openid })
            commit('SET_AUTH', res.header.Authorization);
            return 'success';
        } catch (error) {
            console.error(error);
        }
    }
}

export default actions