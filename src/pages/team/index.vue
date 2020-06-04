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
    <team-list v-if="teamList" :teamList="planList"></team-list>
    <mypicker :state="pickerState" ></mypicker>
  </div>
</template>

<script>
// Use Vuex
import store from "./store";
import teamList from "./teamList/teamList.vue";
import mypicker from "./mypicker/mypicker.vue";

export default {
  data() {
    return {
      teamList: null
    };
  },
  computed: {
    pickerState() {
      return store.state.pickerState
    },
    team() {
      return this.$store.state.teamList
    },
    planList() {
      return store.state.planList
    }
  },
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
    getTeamData() {
      this.$store.dispatch("getTeamList") // 获取团队列表
      store.dispatch('getAllTeamPlan')  // 获取所有团队的任务
      this.teamList = store.state.planList;
    }
  },
  components: {
    teamList,
    mypicker
  },
  mounted() {
    this.getTeamData();
  }
};
</script>
