import Vue from 'vue'
import Vuex from 'vuex'
import {
  addGroupPlan,
  getListGroupPlan,
  updateGroupPlan,
  deleteGroupPlan,
  deleteGroupTask,
  updateMember
} from '../../api/team'
import { formatTime1, getNowTime } from '../../utils'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    mypickerShow: false,
    pickerState: 'add',
    planList: [],
    taskFormList: [],
    PlanForm: {}
  },
  mutations: {
    SET_PICKER_IS_SHOW(state) {
      state.mypickerShow = !state.mypickerShow
    },
    SET_PICKER_STATE(state, newVl) {
      state.pickerState = newVl
    },
    SET_PLANLIST(state, newVl) {
      state.planList = newVl
    },
    SET_TASK_FORM(state, newVl) {
      state.taskFormList = newVl
    },
    ADD_TASK_FOMR(state, newVl) {
      state.taskFormList = newVl
    },
    REMOVE_TASK(state, newVl) {
      // 修改picker列表
      const taskList = state.taskFormList.taskList
      const index = taskList.findIndex(item => item.taskId === newVl)
      taskList.splice(index, 1)
      state.taskFormList.taskList = taskList
      
      // 修改页面列表
      const taskFormList = state.taskFormList
      const planList = state.planList
      planList.map(item => {
        if (item.planId === taskFormList.planId) {
          item = taskFormList
        }
      })
      state.planList = planList
    },
    UPDATE_PLAN_LIST(state, newVl) {
      const planList = state.planList
      planList.map(item => {
        if (item.planId === newVl.planId) 
          item = newVl
      })
      state.planList = planList
      console.log('state.planList :>> ', state.planList);
    }
  },
  actions: {
    // picker是否显示
    setMyPickerIsShow({commit}) {
      commit('SET_PICKER_IS_SHOW')
    },
    // picker是什么类型：add，update
    changePicker({commit}, state) {
      commit('SET_PICKER_STATE', state)
    },
    // 添加团队任务
    async addGroupPlan({ commit }, planData) {
      try {
        const res = await addGroupPlan(planData)
      } catch (error) {
        console.log('error :>> ', error);
      }
    },
    // 获取所有团队任务
    async getAllTeamPlan({ commit }) {
      try {
        const result = await getListGroupPlan()
        const { data = [] } = result

        if (data != null) {
          // 修改数据格式，添加两个属性
          data.map((item) => {
            if(item.taskList !== null)
            item.taskList.map(task => {
              task.start_clock = task.startTime.split(" ")[1]
              task.start_date = task.startTime.split(" ")[0]
              task.end_clock = task.endTime.split(" ")[1]
              task.end_date = task.endTime.split(" ")[0]
            })
          })
        }
        // 更新vuex
        commit('SET_PLANLIST', data)
      } catch (error) {
        console.log('error :>> ', error);
      }
    },
    // 更新taskForm的内容
    async setTaskFormList({ commit }, teamData) {
      try {
        // const res = await updateGroupPlan(groupPlan)
        // console.log('res :>> ', res);
        console.log('teamForm :>> ', teamData);
        commit('SET_TASK_FORM', teamData)
      } catch (error) {
        console.log('error :>> ', error);
      }
      
    },
    // 更新团队计划
    async UpdateGroupPlan({ commit }, groupPlan) {
      try {
        const res = await updateGroupPlan(groupPlan)
        if (res.data.message === "success") {
          await commit("UPDATE_PLAN_LIST", res.data.data)
        }
        console.log('更新res :>> ', res);
        
      } catch (error) {
        console.log('error :>> ', error);
      }
    },
    async DeleteGroupPlan({ commit }, planId) {
      try {
        const result = await deleteGroupPlan(planId)
        console.log('result :>> ', result);
        let arr = this.state.planList
        let index = arr.findIndex(item => item.planId === planId)
        arr.splice(index, 1)
        commit("SET_PLANLIST", arr)

      } catch (error) {
        console.log('error :>> ', error);
      }
    },

    //添加子计划
    async setTaskForm_addTask({ commit }, { teamData, userVo }) {
      const date = getNowTime()
      const { avatarUrl: wechatIcon } = userVo
      const task = {
        ...date,
        userId: teamData.userId,
        planId: teamData.planId,
        lasting: 60,
        priority: 1,
        status: 0,
        taskName: "",
        userVo: {
          wechatIcon,
          userId: teamData.userId
        }
      }
      teamData.taskList.push(task)
      commit("ADD_TASK_FOMR", teamData)
    },
    // 删除子计划
    async RemoveTask({ commit }, taskId) {
      try {
        const { data } = await deleteGroupTask(taskId)
        console.log('res :>> ', data);
        commit("REMOVE_TASK", taskId)
      } catch (error) {
        console.log('error :>> ', error);
      }
    },

    // 加入团队
    async updateMember({ commit }, data) {
      try {
        const res = await updateMember(data)
        console.log('res :>> ', res); 
      } catch (error) {
        console.log('error :>> ', error);
      }
    }
  }
})

export default store
