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
    },
    SET_TEAMNAME(state, newVl) {
        state.teamForm.teamName = newVl
    },
    UPDATE_TEAMLIST(state, newVl) {
        let arr = state.teamList.filters(item => item.groupId !== newVl)
        state.teamList = arr
    }
}

export default mutations
