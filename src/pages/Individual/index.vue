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
    <planList v-if="planData" :planData="planData"></planList>
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
      planData: null
    };
  },
  computed: {},
  methods: {
    // 处理日程列表里面开始时间的显示格式
    handleStartTime(planData) {
      planData.forEach(plan => {
        plan.taskList.forEach(task=>{
          let endTime = new Date(task.endTime);
          task.end_clock = `${endTime.getHours()}:00`;
          task.end_date = endTime.toLocaleDateString();
        })
      });
    },
    getplanData() {
      setTimeout(() => {
        let res = [
          {
            planName: "测试计划八八零六零",
            planId: 1,
            taskList: [
              {
                taskName: "测试子任务1",
                lasting: 30,
                startTime: "2020-05-10 20:21:00",
                endTime: "2020-05-11 20:21:00",
                priority: 3,
                status: 0
              }
            ]
          },
          {
            planName: "测试计划八八零的六零",
            planId: 8,
            taskList: [
              {
                taskName: "测试子任务1测试子任务1测试子任务1测试子任务1测试子任务1测试子任务1测试子任务1",
                lasting: 30,
                startTime: "2020-05-10 20:21:00",
                endTime: "2020-05-11 20:21:00",
                priority: 3,
                status: 1
              },
              {
                taskName: "测试子任务2",
                lasting: 40,
                startTime: "2020-05-10 16:21:00",
                endTime: "2020-05-11 20:21:00",
                priority: 3,
                status: 0
              }
            ]
          },
          {
            planName: "测试计划八八零的六零",
            planId: 8,
            taskList: [
              {
                taskName: "测试子任务1测试子任务1测试子任务1测试子任务1测试子任务1测试子任务1测试子任务1",
                lasting: 30,
                startTime: "2020-05-10 20:21:00",
                endTime: "2020-05-11 20:21:00",
                priority: 3,
                status: 1
              },
              {
                taskName: "测试子任务2",
                lasting: 40,
                startTime: "2020-05-10 16:21:00",
                endTime: "2020-05-11 20:21:00",
                priority: 3,
                status: 0
              },
              {
                taskName: "测试子任务2",
                lasting: 40,
                startTime: "2020-05-10 16:21:00",
                endTime: "2020-05-11 20:21:00",
                priority: 3,
                status: 0
              },
              {
                taskName: "测试子任务2",
                lasting: 40,
                startTime: "2020-05-10 16:21:00",
                endTime: "2020-05-11 20:21:00",
                priority: 3,
                status: 0
              }
            ]
          }
        ];
        this.handleStartTime(res);
        this.planData = res;
        console.log(this.planData)
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
