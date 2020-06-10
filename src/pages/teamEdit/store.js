import Vue from 'vue'
import Vuex from 'vuex'
import { addTeam, getTeamList, deleteGroup } from '../../api/team'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    teamName: '',
    limit: 3,
    shareGroupId: 0,
    teamList: []
  },
  mutations: {
    SET_SHARE_GROUPID(state, newVl) {
      state.shareGroupId = newVl
    },
    SET_TEAM_LIST(state, newVl) {
      state.teamList = newVl
    }
  },
  actions: {
    async AddTeam({ commit }, teamData) {
      try {
        console.log('进入');
        const result = await addTeam(teamData)
        const { data } = result
        console.log('data :>> ', data);
      } catch (error) {
        console.log(result.errMsg);
        console.log('error :>> ', error);
      }
    },
    setShareGroupId({ commit }, groupId) {
      commit('SET_SHARE_GROUPID', groupId)
    },
    // 获取最新的团队列表
    async setTeamList({ commit }) {
      const result = await getTeamList()
      console.log('F5 :>> ', result.data.data);
      commit('SET_TEAM_LIST', result.data.data)
    }
  }
})

export default store
