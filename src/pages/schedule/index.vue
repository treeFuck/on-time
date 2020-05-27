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
}
</style>

<template>
  <div class="schedule">
    <div class="xiala">
      <div class="line"></div>
      <img class="gou" src="../../../static/images/gou.png" />
    </div>
    <mylist v-if="scheduleList" :scheduleList="scheduleList"></mylist>
    <mypicker></mypicker>
  </div>
</template>

<script>
// Use Vuex
import store from "./store";
import mylist from "./mylist/mylist.vue";
import mypicker from "./mypicker/mypicker.vue";

export default {
  data() {
    return {
      scheduleList: null
    };
  },
  computed: {
    algorithm() {
      return store.state.algorithm
    },
    date() {
      return this.handleTime(store.state.date)
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
      let len = scheduleList.length;
      for (let i = 0; i < len; i++) {
        let time = new Date(scheduleList[i].startTime);
        scheduleList[i].start_time = `${time.getHours()}:00`;
      }
    },
    getSchedule() {
      let send = {
        algorithm: this.algorithm,
        date: this.date
      };
      this.$wxhttp
        .post({
          url: "/schedule/sortTask",
          params: send
        })
        .then(res => {
          console.log(res.data);
          let res2 = [
            {
              taskId: 1,
              taskName: "安康打卡",
              lasting: 20,
              startTime: "2020-12-11 07:00:00",
              status: 1
            },
            {
              taskId: 2,
              taskName: "测试测试测试测试测试",
              lasting: 20,
              startTime: "2020-12-11 08:00:00",
              status: 0
            },
            {
              taskId: 3,
              taskName:
                "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
              lasting: 20,
              startTime: "2020-12-11 08:30:00",
              status: 1
            },
            {
              taskId: 3,
              taskName:
                "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
              lasting: 20,
              startTime: "2020-12-11 08:30:00",
              status: 1
            },
            {
              taskId: 4,
              taskName:
                "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
              lasting: 20,
              startTime: "2020-12-11 08:30:00",
              status: 1
            },
            {
              taskId: 5,
              taskName:
                "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
              lasting: 20,
              startTime: "2020-12-11 08:30:00",
              status: 1
            },
            {
              taskId: 6,
              taskName:
                "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
              lasting: 20,
              startTime: "2020-12-11 08:30:00",
              status: 1
            }
          ];
          this.handleStartTime(res2);
          this.scheduleList = res2;
        });
    }
  },
  components: {
    mylist,
    mypicker
  },
  mounted() {
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

