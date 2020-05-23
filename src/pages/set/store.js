import Vue from 'vue'
import Vuex from 'vuex'
import { login } from '../../api/login'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: '',
    nickName: '',
    avatarUrl: ''
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERINFO: (state, userInfo) => {
      state.nickName = userInfo.nickName
      state.avatarUrl = userInfo.avatarUrl
    }
  },
  actions: {
    Login({ commit }, userInfo) {
      console.log('进入登录');
      return new Promise((resolve, reject) => {
        login(userInfo).then(res => {
          console.log('res :>> ', res);
          commit('SET_USERINFO', userInfo)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
})

export default store
