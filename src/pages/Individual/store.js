import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    handlePlanShow: false,
    plan: {
      planName: '',
      taskList: [
        {
          taskName: '',
          lasting: 10,
          startTime: null,
          endTime: null,
          priority: 1,
          status: 0
        }
      ]
    }
  },
  mutations: {
    refreshPlan(state) {
      state.plan = {
        planName: '',
        taskList: [
          {
            taskName: '',
            lasting: 10,
            startTime: null,
            endTime: null,
            priority: 1,
            status: 0
          }
        ]
      };
    },
    changePlan(state, newVl) {
      state.plan = newVl;
    },
    changeShow(state, newVl) {
      state.handlePlanShow = newVl
    },
  }
})

export default store
