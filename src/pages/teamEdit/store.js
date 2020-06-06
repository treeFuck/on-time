import Vue from 'vue'
import Vuex from 'vuex'
import { addTeam } from '../../api/team'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    teamName: '',
    limit: 3,
    shareGroupId: 0
  },
  mutations: {
    SET_SHARE_GROUPID(state, newVl) {
      state.shareGroupId = newVl
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
    }
  }
})

export default store
