<style lang="scss" scoped>
.taskList {
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
    width: 32%;
    font-size: 14px;
    display: inline-block;
    box-sizing: border-box;
    text-align: right;
    padding-right: 5px;
  }
}
</style>
<template>
  <div class="taskList">
    <div class="taskName">
      <label v-if="type" for="taskName">*修改小计划:</label>
      <label v-else for="taskName">*添加小计划:</label>
      <input name="taskName" class="task-name-input" type="text" v-model="task.taskName" />
    </div>
    <div class="time-box">
      <label for>开始时间 :</label>
      <div class="right">
        <picker class="picker" mode="date" @change="startDateChange">
          <span class="year input">{{startTime.date[0]}}</span>
          <span>年</span>
          <span class="month input">{{startTime.date[1]}}</span>
          <span>月</span>
          <span class="day input">{{startTime.date[2]}}</span>
          <span>日</span>
        </picker>
        <picker class="picker" mode="time" @change="startTimeChange">
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
      <input type="text" v-model="estimatedTime" class="es" />
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
        <span class="green"></span>
        <span class="yellow"></span>
        <span class="orange"></span>
        <span class="red"></span>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../store";
import {
  formatTime,
  formatNumber,
  getToday,
  formatTimeStr
} from "../../../../utils/index";

export default {
  props: {
    task: Object
  },
  computed: {},
  data() {
    return {
      taskName: "",
      startTime: null,
      estimatedTime: 60,
      endTime: null,
      type: false
    };
  },
  computed: {},
  methods: {
    startDateChange(event) {
      const value = event.target.value;
      const [year, month, day] = value.split("-");
      this.startTime.date = [year, month, day];
      this.task.startTime = `${value} ${this.startTime.time.join(':')}`;
    },
    startTimeChange(event) {
      const value = event.target.value;
      const [hour, minute, second = "00"] = value.split(":");
      this.startTime.time = [hour, minute, second];
      this.task.startTime = `${this.startTime.date.join('-')} ${value}`;
    },
    endDateChange(event) {
      const value = event.target.value;
      const [year, month, day] = value.split("-");
      this.endTime.date = [year, month, day];
      this.task.endTime = `${value} ${this.endTime.time.join(":")}`;
    },
    endTimeChange(event) {
      const value = event.target.value;
      const [hour, minute, second = "00"] = value.split(":");
      this.endTime.time = [hour, minute, second];
      this.task.endTime = `${this.endTime.date.join("-")} ${value}`;
    },
    setStartTime() {
      let date;
      let str;
      if (this.task.startTime) {
        date = new Date(formatTimeStr(this.task.startTime));
        str = formatTime(date);
      } else {
        str = getToday("8:00:00");
        this.task.startTime = str;
      }
      let [t1, t2] = str.split(" ");
      let [year, month, day] = t1.split("/");
      let [hour, minute, second] = t2.split(":");
      this.startTime = {
        date: [year, month, day],
        time: [hour, minute, second]
      };
      this.endTime = {
        date: [year, month, day],
        time: [hour, minute, second]
      };
    },
    setEndTime() {
      let date;
      let str;
      if (this.task.endTime) {
        date = new Date(formatTimeStr(this.task.endTime));
        str = formatTime(date);
      } else {
        str = getToday("22:00:00");
        this.task.endTime = str;
      }
      const [t1, t2] = str.split(" ");
      const [year, month, day] = t1.split("/");
      const [hour, minute, second] = t2.split(":");
      this.endTime = {
        date: [year, month, day],
        time: [hour, minute, second]
      };
    }
  },
  created() {
    if (this.task.taskId) {
      this.type = true;
    } else {
      this.type = false;
    }
    this.setStartTime();
    this.setEndTime();
  },
  watch: {
    'task.taskId': function(val, oldval) {

      if (val) {
          this.type = true;
        } else {
          this.type = false;
        }
        this.setStartTime();
        this.setEndTime();
    }
  }
};
</script>

