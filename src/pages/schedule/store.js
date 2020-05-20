import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    algorithm: 0,// 0：短作业优先, 1：长作业优先, 2：优先级调度
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
