const mutations = {
    SET_USERINFO(state, userInfo) {
        state.userInfo.nickName = userInfo.nickName
        state.userInfo.avatarUrl = userInfo.avatarUrl
        state.userInfo.openid = userInfo.openid
        state.userInfo.userId = userInfo.userId
    },
    SET_AUTH(state, Authorization) {
        state.Authorization = Authorization;
    },
    SET_SHARED_GROUP(state, newVl) {
        state.sharedGroup = newVl
    }
}

export default mutations
