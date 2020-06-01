const mutations = {
    fun(state, result) {
        state.test = result
    },
    SET_USERINFO(state, userInfo) {
        state.userInfo.nickName = userInfo.nickName
        state.userInfo.avatarUrl = userInfo.avatarUrl
        state.userInfo.openid = userInfo.openid
    },
    SET_AUTH(state, Authorization) {
        state.Authorization = Authorization;
    },
    SET_TEAMLIST(state, newVl) {
      state.teamList = newVl
    }
}

export default mutations
