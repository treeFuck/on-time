import Vue from 'vue'
import Vuex from 'vuex'
import { addGroupPlan, getListGroupPlan, updateGroupPlan } from '../../api/team'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    mypickerShow: false,
    pickerState: 'add',
    team: [],
    planList: [],
    pickerForm: {
      userId: 1,
      taskName: "",
      groupMemberList: [],
      startTime: {},
      endTime: {},
      lasting: 60,
      priority: 1,
      status: 0
    }
  },
  mutations: {
    SET_PICKER_IS_SHOW(state) {
      state.mypickerShow = !state.mypickerShow
    },
    SET_PICKER_STATE(state, newVl) {
      state.pickerState = newVl
    },
    ADD_PLAN(state, newVl) {
      const index = state.team.findIndex(item => item.groupId == newVl.type)
      state.team[index] = newVl
      // state.planList.push(newVl)
    },
    SET_PLANLIST(state, newVl) {
      state.planList = newVl
    },
    SET_PICKER_FORM(state, newVl) {
      state.pickerForm = newVl
    },
    UPDATE_PLAN_LIST(state, newVl) {
      state.planList.map(item => {
        if (item.type === newVl.type) 
          item = newVl
      })
    }
  },
  actions: {
    setMyPickerIsShow({commit}) {
      commit('SET_PICKER_IS_SHOW')
    },
    changePicker({commit}, state) {
      commit('SET_PICKER_STATE', state)
    },
    async addGroupPlan({ commit }, planData) {
      const res = await addGroupPlan(planData)
      console.log('res :>> ', res);
      commit('ADD_PLAN', res.data.data)
    },
    // 获取所有团队任务
    async getAllTeamPlan({ commit }) {
      try {
        const result = await getListGroupPlan()
        const { data } = result

        // 修改数据格式，添加两个属性
        data.map((item) => {
          item.taskList.map(task => {
            task.start_clokc = task.startTime.split(" ")[1]
            task.start_date = task.startTime.split(" ")[0]
            task.end_clock = task.endTime.split(" ")[1]
            task.end_date = task.endTime.split(" ")[0]
          })
        })
        console.log('data :>> ', data);
        // 更新vuex
        commit('SET_PLANLIST', data)
      } catch (error) {
        console.log('error :>> ', error);
      }
    },
    // 更新taskForm的内容
    setTaskForm({commit}, teamData) {
      console.log('teamForm :>> ', teamData);
      commit('SET_PICKER_FORM', teamData)
    },
    async UpdateGroupPlan({ commit }, groupPlan) {
      try {
        const res = await updateGroupPlan(groupPlan)
        console.log('更新任务的res :>> ', res);
        commit("UPDATE_PLAN_LIST", groupPlan)
      } catch (error) {
        console.log('error :>> ', error);
      }
    }
  }
})

export default store
