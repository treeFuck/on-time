import Vue from 'vue'
import Vuex from 'vuex'
import { addTeam, getTeamList, deleteGroup } from '../../api/team'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    teamName: '',
    limit: 3,
    teamList: []
  },
  mutations: {
    SET_TEAM_LIST(state, newVl) {
      state.teamList = newVl
    }
  },
  actions: {
    async AddTeam({ commit }, teamData) {
      try {
        const { data } = await addTeam(teamData)
        return data
      } catch (error) {
        console.log('error :>> ', error);
        wx.showToast({
          title: '新建队伍出错，请检查你的输入并稍后再做尝试',
          icon: "none",
          duration: 2000
        });
      }
    },
    // 获取最新的团队列表
    async setTeamList({ commit }) {
      const result = await getTeamList()
      commit('SET_TEAM_LIST', result.data.data)
    }
  }
})

export default store
