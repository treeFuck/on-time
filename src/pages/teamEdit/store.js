import Vue from 'vue'
import Vuex from 'vuex'
import { addTeam } from '../../api/team'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    teamName: '',
    limit: 3
  },
  mutations: {
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
    }
  }
})

export default store
