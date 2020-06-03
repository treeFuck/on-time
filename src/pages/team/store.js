import Vue from 'vue'
import Vuex from 'vuex'
import { getGroupPlan, addGroupPlan, getTeamList } from '../../api/team'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    date: new Date(),
    mypickerShow: false,
    pickerState: 'add',
    team: [],
    teamList: [{
      teamName: "日本下海计划",
      teamId: 8,
      members: [{
          id: 1,
          nickName: '政',
          avatar: 'https://wx.qlogo.cn/mmopen/vi_32/krwDIf6c0aib75H4LxmR7LzJ7WahDxJrr7zZew9y4iaztssNic0iar5IGQaXVWFpQicgSKHpZjF1ZPunIuV9tPaAiarQ/132'
        },
        {
          id: 2,
          nickName: '钻',
          avatar: "https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEL6r4LZFYruzJ357jxI4UXibZQH4Dg50W1hicmpwHsibEQ0JC5vVj3puJtwf0I9fD89ficFiblcwEUNjzg/132"

        },
        {
          id: 3,
          nickName: '豪',
          avatar: "https://wx.qlogo.cn/mmopen/vi_32/da60FtvYzX2icicIV3j35Fb1jRt7EKAJ0IMjd9tyvsa16RHZNSCXtOJg79mMuYQSqqo1deuu6EhibuAUpVbaOotJQ/132"
        },
        {
          id: 4,
          nickName: '沛',
          avatar: "https://wx.qlogo.cn/mmopen/vi_32/fTdP2O5qDboPkDJ6aHvNCD6OpQXv2JlCuzKJ0vA006bgr6MwtFtXaC5wktwFaGOvH79PnSdGVLOTMCHIWQoxgg/132"

        },
        {
          id: 5,
          nickName: '兰',
          avatar: "https://wx.qlogo.cn/mmopen/vi_32/zeW8rbMyebia5SXsB3DfIT3ADo2hgyOOiasbDAfIVbjzhOupczickiayHialXIx5vz3r7DKMthsXJic5A2hwYXSiajBvg/132"
        },
        {
          id: 6,
          nickName: '树',
          avatar: "https://wx.qlogo.cn/mmopen/vi_32/V3QWY3NwfEndcsZTWGTTLLUbhKVJ8oPWjAn8MZNwL8Bjxxstr0KQUHoxD0stWDck1ic5QaCARzI7Fe3wRVYfv4A/132"
        }
      ],
      taskList: [{
          taskName: "去日本",
          lasting: 30,
          startTime: "2020-05-10 20:21:00",
          endTime: "2020-05-11 20:21:00",
          priority: 3,
          status: 1,
          members: [{
              id: 2,
              nickName: '钻',
              avatar: "https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEL6r4LZFYruzJ357jxI4UXibZQH4Dg50W1hicmpwHsibEQ0JC5vVj3puJtwf0I9fD89ficFiblcwEUNjzg/132"
            },
            {
              id: 5,
              nickName: '兰',
              avatar: "https://wx.qlogo.cn/mmopen/vi_32/zeW8rbMyebia5SXsB3DfIT3ADo2hgyOOiasbDAfIVbjzhOupczickiayHialXIx5vz3r7DKMthsXJic5A2hwYXSiajBvg/132"
            }
          ]
        },
        {
          taskName: "去东京湾",
          lasting: 40,
          startTime: "2020-05-10 16:21:00",
          endTime: "2020-05-11 20:21:00",
          priority: 3,
          status: 0,
          members: [{
              id: 2,
              nickName: '钻',
              avatar: "https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEL6r4LZFYruzJ357jxI4UXibZQH4Dg50W1hicmpwHsibEQ0JC5vVj3puJtwf0I9fD89ficFiblcwEUNjzg/132"
            },
            {
              id: 5,
              nickName: '兰',
              avatar: "https://wx.qlogo.cn/mmopen/vi_32/zeW8rbMyebia5SXsB3DfIT3ADo2hgyOOiasbDAfIVbjzhOupczickiayHialXIx5vz3r7DKMthsXJic5A2hwYXSiajBvg/132"
            }
          ]
        },
        {
          taskName: "租借快艇",
          lasting: 40,
          startTime: "2020-05-10 16:21:00",
          endTime: "2020-05-11 20:21:00",
          priority: 3,
          status: 0,
          members: [{
              id: 2,
              nickName: '钻',
              avatar: "https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEL6r4LZFYruzJ357jxI4UXibZQH4Dg50W1hicmpwHsibEQ0JC5vVj3puJtwf0I9fD89ficFiblcwEUNjzg/132"
            },
            {
              id: 5,
              nickName: '兰',
              avatar: "https://wx.qlogo.cn/mmopen/vi_32/zeW8rbMyebia5SXsB3DfIT3ADo2hgyOOiasbDAfIVbjzhOupczickiayHialXIx5vz3r7DKMthsXJic5A2hwYXSiajBvg/132"
            }
          ]
        },
        {
          taskName: "下海",
          lasting: 40,
          startTime: "2020-05-10 16:21:00",
          endTime: "2020-05-11 20:21:00",
          priority: 3,
          status: 0,
          members: [{
              id: 2,
              nickName: '钻',
              avatar: "https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEL6r4LZFYruzJ357jxI4UXibZQH4Dg50W1hicmpwHsibEQ0JC5vVj3puJtwf0I9fD89ficFiblcwEUNjzg/132"
            },
            {
              id: 5,
              nickName: '兰',
              avatar: "https://wx.qlogo.cn/mmopen/vi_32/zeW8rbMyebia5SXsB3DfIT3ADo2hgyOOiasbDAfIVbjzhOupczickiayHialXIx5vz3r7DKMthsXJic5A2hwYXSiajBvg/132"
            }
          ]
        }
      ]
    }],
    planList: []
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
    }
  },
  actions: {
    setMyPickerIsShow({
      commit
    }) {
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
        // 获取所有团队
        const { data: teamList } = await getTeamList()
        let arr = []

        // 获取所有任务
        await teamList.data.map(async (item) => {
          const {data} = await getGroupPlan(item.groupId)
          if (data.data !== null) {
            // 修改数据中endTime的样式，方便在页面中显示
            data.data.map(plan => {
              plan.taskList.map(task => {
                task.end_clock = task.endTime.split(" ")[1]
                task.end_date = task.endTime.split(" ")[0]
              })
            })
            arr = [...arr, ...data.data]
          }
          commit('SET_PLANLIST', arr)
        })
        
      } catch (error) {
        console.log('error :>> ', error);
      }
  },
  }
})

export default store
