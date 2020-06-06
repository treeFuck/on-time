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
        if (state.teamList.length > 0) {
            const index = state.teamList.findIndex(item => item.groupId === newVl)
            const teamList = state.teamList.splice(index, 1)
            state.teamList = teamList
        }
    }
}

export default mutations
