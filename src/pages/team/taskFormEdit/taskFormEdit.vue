<template>
  <div class="plan-form">
    <div class="taskName">
      <label for="taskName">*添加小计划:</label>
      <input
        name="taskName"
        class="task-name-input"
        type="text"
        v-model="formData.taskName"
        placeholder="请输入计划内容"
      />
    </div>
    <!-- <div class="member">
      <label for>*负责人 :</label>
      <div class="memberList">
        <img
          class="avatar"
          v-for="member in formData.groupMemberList"
          :key="member.userid"
          :src="member.wechatIcon"
          @click="setLeader(member)"
        />
        <div 
        class="img" 
        v-for="member in formData.groupMemberList"
        :key="member.userid"
        ></div>
      </div>
    </div> -->
    <div class="time-box">
      <label for>开始时间 :</label>
      <div class="right">
        <picker
          class="picker"
          mode="date"
          :value="startTime.t1"
          @change="startDateChange"
        >
          <span class="year input">{{startTime.date[0]}}</span>
          <span>年</span>
          <span class="month input">{{startTime.date[1]}}</span>
          <span>月</span>
          <span class="day input">{{startTime.date[2]}}</span>
          <span>日</span>
        </picker>
        <picker
          class="picker"
          mode="time"
          :value="startTime.time.join(':')"
          @change="startTimeChange"
        >
          <span class="hour input">{{startTime.time[0]}}</span>
          <span>时</span>
          <span class="minute input">{{startTime.time[1]}}</span>
          <span>分</span>
          <span class="second input">{{startTime.time[2]}}</span>
          <span>秒</span>
        </picker>
        {{startTime.date}}
      </div>
    </div>
    <div class="time-box">
      <label for>预计时间 :</label>
      <input type="text" v-model="formData.lasting" class="es" />
      <span>分</span>
    </div>
    <div class="time-box">
      <label for>结束时间 :</label>
      <div class="right">
        <picker class="picker" mode="date" @change="endDateChange">
          <span class="year input">{{endTime.date[0]}}</span>
          <span>年</span>
          <span class="month input">{{endTime.date[1]}}</span>
          <span>月</span>
          <span class="day input">{{endTime.date[2]}}</span>
          <span>日</span>
        </picker>
        <picker class="picker" mode="time" @change="endTimeChange">
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
      <label for>重要程度 :</label>
      <div class="priorityList">
        <span class="green" @click="selectPriority(1)">{{p[0]}}</span>
        <span class="yellow" @click="selectPriority(2)">{{p[1]}}</span>
        <span class="orange" @click="selectPriority(3)">{{p[2]}}</span>
        <span class="red" @click="selectPriority(4)">{{p[3]}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
import { formatTime, formatNumber } from "../../../utils/index";

export default {
  props: {
    formData: Object
  },
  data() {
    return {
      taskName: "",
      startTime: this.format(this.formData.startTime),
      endTime: this.format(this.formData.endTime),
      p: ["√", "", "", ""]
    };
  },
  methods: {
    startDateChange(event) {
      const value = event.target.value;
      const [year, month, day] = value.split("-");
      this.startTime.date = [year, month, day];
      this.startTime.t1 = value
      console.log(this.startTime);
      this.formData.startTime = `${this.startTime.t1} ${this.startTime.t2}`
    },  
    startTimeChange(event) {
      const value = event.target.value;
      const [hour, minute, second = "00"] = value.split(":");
      this.startTime.time = [hour, minute, second];
      this.startTime.t2 = [hour, minute, second].join(":")
      console.log(this.startTime);
      this.formData.startTime = `${this.startTime.t1} ${this.startTime.t2}`
    },
    endDateChange(event) {
      const value = event.target.value;
      const [year, month, day] = value.split("-");
      this.endTime.date = [year, month, day];
      this.endTime.t1 = value
      console.log(this.endTime);
      this.formData.endTime = `${this.endTime.t1} ${this.endTime.t2}`
    },
    endTimeChange(event) {
      const value = event.target.value;
      const [hour, minute, second = "00"] = value.split(":");
      this.endTime.time = [hour, minute, second];
      this.endTime.t2 = [hour, minute, second].join(":")
      console.log(this.endTime);
      this.formData.endTime = `${this.endTime.t1} ${this.endTime.t2}`
    },
    format(time) {
      const [t1, t2] = time.split(" ");
      const [year, month, day] = t1.split("-");
      const [hour, minute, second] = t2.split(":");
      return {
        date: [year, month, day],
        time: [hour, minute, second],
        t1,
        t2
      }
    },
    setLeader(member) {
      this.formData.userId = member.userId;
    },
    selectPriority(value) {
      this.formData.priority = value;
      this.p = ["", "", "", ""]
      this.p[value-1] = "√"
    }
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
      text-align: center;
      font-size: 22px;
      line-height: 14pt;
    }
    .green {
      background-color: #69ff8c;
    }
    .yellow {
      background-color: #f9ff69;
    }
    .orange {
      background-color: #ffcf60;
    }
    .red {
      background-color: #ff9460;
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