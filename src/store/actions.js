import { getOpenid, login } from "../api/login"
import { getTeamList, deleteGroup } from '../api/team'

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
            commit('SET_USERINFO', { ...userInfo, openid, userId: res.data.userId })
            commit('SET_AUTH', res.header.Authorization);
            return 'success';
        } catch (error) {
            console.error(error);
        }
  },

  async getTeamList({ commit }) {
      try {
        const result = await getTeamList()
        const { data } = result.data
        commit('SET_TEAMLIST', data)
      } catch (error) {
        console.log(result.errMsg);
      }
  },
  
  setTeamName({commit}) {
    commit('SET_TEAMNAME')
  },
  
  async deleteGroup({ commit }, groupId) {
    try {
      const result = await deleteGroup(groupId)
      console.log('result :>> ', result);
      await commit("UPDATE_TEAMLIST", groupId)
    } catch (error) {
      console.log(result.message);
    }
  }
}

export default actions