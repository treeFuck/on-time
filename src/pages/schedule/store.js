import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    algorithm: '',
    date: ''
  },
  mutations: {
    changeDate(state, newDate) {
      console.log("asdadsad")
      state.date = newDate
  }
  }
})

export default store
