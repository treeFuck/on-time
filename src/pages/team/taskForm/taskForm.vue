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
      <label for>*负责人 :</label>
      <div class="memberList">
        <img class="avatar" v-for="member in memberList" :key="member.id" :src="member.avatar" alt />
      </div>
    </div>
    <div class="time-box">
      <label for>开始时间 :</label>
      <div class="right">
        <picker class="picker" mode="date" :value="startTime.date.join('-')" @change="startDateChange">
          <span class="year input">{{startTime.date[0]}}</span>
          <span>年</span>
          <span class="month input">{{startTime.date[1]}}</span>
          <span>月</span>
          <span class="day input">{{startTime.date[2]}}</span>
          <span>日</span>
        </picker>
        <picker class="picker" mode="time" :value="startTime.time.join(':')" @change="startTimeChange">
          <span class="hour input">{{startTime.time[0]}}</span>
          <span>时</span>
          <span class="minute input">{{startTime.time[1]}}</span>
          <span>分</span>
          <span class="second input">{{startTime.time[2]}}</span>
          <span>秒</span>
        </picker>
      </div>
    </div>
    <div class="time-box">
      <label for>预计时间 :</label>
      <input type="text" v-model="estimatedTime" class="es">
      <span>分</span>
    </div>
    <div class="time-box">
      <label for>结束时间 :</label>
      <div class="right">
        <picker class="picker" mode="date" :value="endTime.t1" @change="endDateChange">
          <span class="year input">{{endTime.date[0]}}</span>
          <span>年</span>
          <span class="month input">{{endTime.date[1]}}</span>
          <span>月</span>
          <span class="day input">{{endTime.date[2]}}</span>
          <span>日</span>
        </picker>
        <picker class="picker" mode="time" :value="endTime" @change="endTimeChange">
          <span class="hour input">{{endTime.time[0]}}</span>
          <span>时</span>
          <span class="minute input">{{endTime.time[1]}}</span>
          <span>分</span>
          <span class="second input">{{endTime.time[2]}}</span>
          <span>秒</span>
        </picker>
      </div>
    </div>
    <div class="priority">
      <label for="">重要程度 :</label>
      <div class="priorityList">
        <span class="green"></span>
        <span class="yellow"></span>
        <span class="orange"></span>
        <span class="red"></span>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
import { formatTime, formatNumber } from "../../../utils/index";

export default {
  computed: {
    memberList() {
      return [
        {
          id: 1,
          nickName: "政",
          avatar:
            "https://wx.qlogo.cn/mmopen/vi_32/krwDIf6c0aib75H4LxmR7LzJ7WahDxJrr7zZew9y4iaztssNic0iar5IGQaXVWFpQicgSKHpZjF1ZPunIuV9tPaAiarQ/132"
        },
        {
          id: 2,
          nickName: "钻",
          avatar:
            "https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEL6r4LZFYruzJ357jxI4UXibZQH4Dg50W1hicmpwHsibEQ0JC5vVj3puJtwf0I9fD89ficFiblcwEUNjzg/132"
        },
        {
          id: 3,
          nickName: "豪",
          avatar:
            "https://wx.qlogo.cn/mmopen/vi_32/da60FtvYzX2icicIV3j35Fb1jRt7EKAJ0IMjd9tyvsa16RHZNSCXtOJg79mMuYQSqqo1deuu6EhibuAUpVbaOotJQ/132"
        },
        {
          id: 4,
          nickName: "沛",
          avatar:
            "https://wx.qlogo.cn/mmopen/vi_32/fTdP2O5qDboPkDJ6aHvNCD6OpQXv2JlCuzKJ0vA006bgr6MwtFtXaC5wktwFaGOvH79PnSdGVLOTMCHIWQoxgg/132"
        },
        {
          id: 5,
          nickName: "兰",
          avatar:
            "https://wx.qlogo.cn/mmopen/vi_32/zeW8rbMyebia5SXsB3DfIT3ADo2hgyOOiasbDAfIVbjzhOupczickiayHialXIx5vz3r7DKMthsXJic5A2hwYXSiajBvg/132"
        },
        {
          id: 6,
          nickName: "树",
          avatar:
            "https://wx.qlogo.cn/mmopen/vi_32/V3QWY3NwfEndcsZTWGTTLLUbhKVJ8oPWjAn8MZNwL8Bjxxstr0KQUHoxD0stWDck1ic5QaCARzI7Fe3wRVYfv4A/132"
        }
      ];
    },
  },
  data() {
    return {
      taskName: "",
      startTime: null,
      estimatedTime: 60,
      endTime: null
    };
  },
  methods: {
    startDateChange(event) {
      const value = event.target.value
      const [year, month, day] = value.split('-')
      this.startTime.date = [year, month, day]
      console.log(this.startTime);
    },
    startTimeChange(event) {
      const value = event.target.value
      const [hour, minute, second = '00'] = value.split(':')
      this.startTime.time = [hour, minute, second]
      console.log(this.startTime);
    },
    endDateChange(event) {
      const value = event.target.value
      const [year, month, day] = value.split('-')
      this.endTime.date = [year, month, day]
      console.log(this.endTime);
    },
    endTimeChange(event) {
      const value = event.target.value
      const [hour, minute, second = '00'] = value.split(':')
      this.endTime.time = [hour, minute, second]
      console.log(this.endTime);
    },
    getNowDate(time) {
      const date = new Date();
      const str = formatTime(date);
      console.log(str);
      const [t1, t2] = str.split(" ");
      const [year, month, day] = t1.split("/");
      const [hour, minute, second] = t2.split(":");
      this.startTime = { 
        date: [year, month, day], 
        time: [hour, minute, second]
      };
      this.endTime = {
        date: [year, month, day],
        time: [formatNumber((Number(hour) + 1) % 24), minute, second]
      };
    }
  },
  created() {
    this.getNowDate(this.startTime);
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
  color: #a08600;
  .taskName {
    display: flex;
    align-items: center;
    label {
      font-size: 16px;
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
      font-size: 14px;
      text-align: right;
      padding-right: 5px;
    }
    .memberList {
      width: 60%;
      box-sizing: border-box;
      padding-left: 10px;
    }
  }
  .time-box {
    display: flex;
    margin: 10px 0;
    .input {
      background-color: #fff;
      padding: 5px 10px;
      border-radius: 5pt;
      margin: 0 5px;
    }
    .hour {
      padding: 5px 19px;
    }
    .right {
      .picker {
        margin-top: 10px;
      }
    }
    .es {
      background-color: #fff;
      padding: 0 10px;
      border-radius: 5pt;
      margin: 0 5px;
      width: 24pt;
      text-align: center;
    }
  }
  .priority {
    display: flex;
    span {
      display: inline-block;
      width: 28pt;
      height: 14pt;
      border-radius: 5pt;
      margin: 0 5px;
    }
    .green {
      background-color: #69FF8C;
    }
    .yellow {
      background-color: #F9FF69;
    }
    .orange {
      background-color: #FFCF60;
    }
    .red {
      background-color: #FF9460;
    }
  }

  .avatar {
    width: 1.5em;
    height: 1.5em;
    border-radius: 100%;
    margin: 0 2pt;
  }
  label {
    width: 30%;
    font-size: 14px;
    display: inline-block;
    box-sizing: border-box;
    text-align: right;
    padding-right: 5px;
  }
}
</style>