import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    algorithm: 0, // 0：短作业优先, 1：长作业优先, 2：优先级调度
    date: new Date(),
    teamList: [{
        teamName: "富婆求子计划",
        teamId: 1,
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
          taskName: "购买富婆电话目录",
          lasting: 30,
          startTime: "2020-05-10 20:21:00",
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
        }]
      },
      {
        teamName: "非洲挖矿计划",
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
            taskName: "成功加入朱一旦的公司",
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
            taskName: "前往非洲",
            lasting: 40,
            startTime: "2020-05-10 16:21:00",
            endTime: "2020-05-11 20:21:00",
            priority: 3,
            status: 0
          }
        ]
      },
      {
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
      }
    ]
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
