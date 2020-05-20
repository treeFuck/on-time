<style scoped lang="scss">
.xiala {
  position: absolute;
  top: 0;
  left: 20%;
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
  computed: {},
  methods: {
    handleDate(obj) {
      let date = obj;
      if (!date) {
        date = new Date();
      }
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      return `${year}-${month}-${day}`;
    },
    getSchedule() {
      let send = {
        algorithm: store.state.algorithm,
        date: this.handleDate(store.state.date)
      };
      console.log("获取日程列表，发送：", send);
      setTimeout(() => {
        this.scheduleList = [
          {
            taskId: 1,
            taskName: "安康打卡",
            lasting: 20,
            startTime: "07:00",
            status: 1
          },
          {
            taskId: 2,
            taskName: "测试测试测试测试测试",
            lasting: 20,
            startTime: "08:00",
            status: 0
          },
          {
            taskId: 3,
            taskName:
              "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
            lasting: 20,
            startTime: "08:30",
            status: 1
          }
        ];
      }, 1000);
    }
  },
  components: {
    mylist,
    mypicker
  },
  mounted() {
    this.getSchedule();
  }
};
</script>

