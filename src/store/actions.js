import { getOpenid } from "../api/login"

const actions = {
    async Login({ commit }, userInfo) {
        try {
            //通过云函数获取openid
            const openid = await getOpenid()
            userInfo = {...userInfo, openid}
            commit('SET_USERINFO', userInfo)

            //将用户信息保存到localStroage
            console.log(JSON.stringify(userInfo));
            localStorage.setItem('userInfo', JSON.stringify(userInfo))
        } catch (error) {
            console.error(error)
        }
    }
}

export default actions