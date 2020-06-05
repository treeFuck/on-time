<style scoped lang="scss">
.xiala {
  position: fixed;
  top: 0;
  left: 25%;
  width: 2em;
  height: 90%;
  .line {
    position: absolute;
    top: 0;
    right: 75%;
    width: 2px;
    height: 100%;
    background: #ffe55e;
  }
  .gou {
    display: block;
    position: absolute;
    bottom: -2em;
    right: 0;
    width: 2em;
    height: 2em;
    transform-style: preserve-3d;
    transform: rotateY(-180deg);
  }
  .null {
    background-position: 60% -0.15em;
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-image: url(../../../static/images/fish3.png);
  }
}
</style>

<template>
  <div class="schedule">
    <div class="xiala">
      <div class="line"></div>
      <img class="gou" src="../../../static/images/gou.png" />
    </div>
    <mylist v-if="scheduleList" :scheduleList="scheduleList"></mylist>
    <div v-if="!scheduleList" class="null"></div>
    <mypicker></mypicker>
  </div>
</template>

<script>
// Use Vuex
import store from "./store";
import mylist from "./mylist/mylist.vue";
import mypicker from "./mypicker/mypicker.vue";
import httpReq from "../../api/schedule.js";

export default {
  data() {
    return {
      scheduleList: null
    };
  },
  computed: {
    algorithm() {
      return store.state.algorithm;
    },
    date() {
      return this.handleTime(store.state.date);
    }
  },
  methods: {
    prefixInteger(num, n) {
      return (Array(n).join(0) + num).slice(-n);
    },
    // 格式化发送给后台的日期字符串
    handleTime(obj) {
      let date = obj;
      if (!date) {
        date = new Date();
      }
      let year = date.getFullYear();
      let month = this.prefixInteger(date.getMonth() + 1, 2);
      let day = this.prefixInteger(date.getDate(), 2);
      return `${year}-${month}-${day}`;
    },
    // 处理日程列表里面开始时间的显示格式
    handleStartTime(scheduleList) {
      if (scheduleList == null) {
        return;
      }
      let len = scheduleList.length;
      for (let i = 0; i < len; i++) {
        let dateStr = scheduleList[i].startTime.replace(/\-/g, "/").split(".")[0];
        let time = new Date(dateStr);
        scheduleList[i].start_time = `${time.getHours()}:${this.prefixInteger(time.getMinutes(), 2)}`;
      }
    },
    // 获取日程列表
    getSchedule() {
      let send = {
        algorithm: this.algorithm,
        date: this.date
      };
      //wx.showLoading();
      this.$wxhttp
        .post({
          url: "/schedule/sortTask",
          params: send
        })
        .then(res => {
          //wx.hideLoading();
          console.log(res.data.data);
          this.handleStartTime(res.data.data);
          this.scheduleList = res.data.data;
        });
    }
  },
  components: {
    mylist,
    mypicker
  },
  onShow() {
    this.getSchedule();
  },
  watch: {
    algorithm(newVl, oldVl) {
      this.getSchedule();
    },
    date(newVl, oldVl) {
      this.getSchedule();
    }
  }
};
</script>

