<template>
  <div class="plan-form">
    <div class="taskName">
      <label for="taskName">*添加小计划:</label>
      <input
        name="taskName"
        class="task-name-input"
        type="text"
        v-model="taskName"
        placeholder="请输入计划内容"
      />
    </div>
    <div class="member">
      <label for="">*负责人:</label>
      <div class="memberList">
        <img class="avatar" v-for="member in memberList" :key="member.id" :src="member.avatar" alt="">
      </div>
    </div>
    <div class="startTime"></div>
    <div class="estimatedTime"></div>
    <div class="endTime"></div>
    <div class="priority"></div>
  </div>
</template>

<script>
import store from '../store'

export default {
  computed: {
    memberList() {
      return [{
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
        ]
    }
  },
  data() {
    return {
      taskName: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.plan-form {
  box-sizing: border-box;
  padding: 10px;
  margin: 10px;
  background-color: #ffeb88;
  border-radius: 5pt;
  color: #A08600;
  .taskName {
    display: flex;
    align-items: center;
    label {
      width: 30%;
      font-size: 16px;
      display: inline-block;
      text-align: center;
    }
    input {
      display: inline-block;
      background-color: #ffffff;
      border-radius: 5pt;
      width: 70%;
      text-align: center;
    }
  }
  .member {
    margin: 10px 0;
    display: flex;
    align-items: center;
    label {
      display: inline-block;
      width: 30%;
      font-size: 14px;
      text-align: right;
      box-sizing: border-box;
      padding-right: 5px;
    }
    .memberList {
      width: 60%;
      box-sizing: border-box;
      padding-left: 10px;
    }
  }
  .avatar {
  width: 1.5em;
  height: 1.5em;
  border-radius: 100%;
  margin: 0 2pt;
}
}
</style>