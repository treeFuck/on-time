import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    type: 1, // 类型：0-->修改，1-->添加
    plan: null
  },
  mutations: {
    changeType(state, newVl) {
      state.type = newVl
    },
    changePlan(state, newVl) {
      state.plan = newVl;
    }
  }
})

export default store
