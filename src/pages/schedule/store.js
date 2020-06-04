import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    algorithm: 1,// 1：短作业优先, 2：长作业优先, 3：优先级调度
    date: new Date()
  },
  mutations: {
    changeDate(state, newVl) {
      state.date = newVl
    },
    changeAlgorithm(state, newVl) {
      state.algorithm = newVl;
    }
  }
})

export default store
