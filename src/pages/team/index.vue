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
  <div class="Individual">
    <div class="xiala">
      <div class="line"></div>
      <img class="gou" src="../../../static/images/gou.png" />
    </div>
    <planList v-if="teamList" :teamList="teamList"></planList>
    <mypicker></mypicker>
  </div>
</template>

<script>
// Use Vuex
import store from "./store";
import planList from "./planList/planList.vue";
import mypicker from "./mypicker/mypicker.vue";
export default {
  data() {
    return {
      teamList: null
    };
  },
  computed: {},
  methods: {
    // 处理日程列表里面开始时间的显示格式
    handleStartTime(teamList) {
      teamList.forEach(team => {
        team.taskList.forEach(task=>{
          let endTime = new Date(task.endTime);
          task.end_clock = `${endTime.getHours()}:00`;
          task.end_date = endTime.toLocaleDateString();
        })
      });
    },
    getplanData() {
      setTimeout(() => {
        this.teamList = store.state.teamList;
        this.handleStartTime(this.teamList);
        console.table(this.teamList);
      }, 1000);
    }
  },
  components: {
    planList,
    mypicker
  },
  mounted() {
    this.getplanData();
  }
};
</script>
