import Vue from 'vue'
import Vuex from 'vuex'
import { addTeam, getTeamList, deleteGroup } from '../../api/team'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    teamName: '',
    limit: 3,
    sharedGroup: {},
    teamList: []
  },
  mutations: {
    SET_SHARED_GROUP(state, newVl) {
      state.sharedGroup = newVl
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
    setShareGroup({ commit }, sharedGroup) {
      commit('SET_SHARED_GROUP', sharedGroup)
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
