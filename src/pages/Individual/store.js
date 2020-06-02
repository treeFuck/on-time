import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    handlePlanShow: false,
    plan: {
      planName: null,
      taskList: [
        {
          taskName: null,
          lasting: null,
          startTime: null,
          endTime: null,
          priority: null,
          status: null
        }
      ]
    }
  },
  mutations: {
    changePlan(state, newVl) {
      state.plan = newVl;
    },
    changeShow(state, newVl) {
      state.handlePlanShow = newVl
    },
  }
})

export default store
