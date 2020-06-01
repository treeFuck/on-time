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
    <handlePlan></handlePlan>
    <planList v-if="planData" :planData="planData" @handlePlanShow="handlePlanShow"></planList>
  </div>
</template>

<script>
// Use Vuex
import store from "./store";
import planList from "./planList/planList.vue";
import handlePlan from "./handlePlan/handlePlan.vue";
import httpReq from "../../api/Individual.js";
import { formatNumber, formatTime } from "../../utils/index.js";
export default {
  data() {
    return {
      planData: null
    };
  },
  computed: {
  },
  methods: {
    // 处理计划列表里面时间的显示格式
    handleStartTime(planData) {
      planData.forEach(plan => {
        plan.taskList.forEach(task => {
          let dateStr = task.endTime.replace(/\-/g, "/").split(".")[0];
          let endTime = new Date(dateStr);
          const year = endTime.getFullYear();
          const month = endTime.getMonth() + 1;
          const day = endTime.getDate();
          const hour = endTime.getHours();
          const minute = endTime.getMinutes();
          task.end_date = [year, month, day].map(formatNumber).join("/");
          task.end_clock = [hour, minute].map(formatNumber).join(":");
        });
      });
    },
    getplanData() {
      // httpReq.getPlan().then(res=>{
      //   console.log(res);
      // })
      setTimeout(() => {
        let res = [
          {
            planName: "测试计划八八零六零",
            planId: 1,
            taskList: [
              {
                taskId: 1,
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
                taskId: 2,
                taskName:
                  "测试子任务1测试子任务1测试子任务1测试子任务1测试子任务1测试子任务1测试子任务1",
                lasting: 30,
                startTime: "2020-05-10 20:21:00",
                endTime: "2020-05-11 20:21:00",
                priority: 3,
                status: 1
              },
              {
                taskId: 3,
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
            planId: 9,
            taskList: [
              {
                taskId: 4,
                taskName:
                  "测试子任务1测试子任务1测试子任务1测试子任务1测试子任务1测试子任务1测试子任务1",
                lasting: 30,
                startTime: "2020-05-10 20:21:00",
                endTime: "2020-05-11 20:21:00",
                priority: 3,
                status: 1
              },
              {
                taskId: 5,
                taskName: "测试子任务2",
                lasting: 40,
                startTime: "2020-05-10 16:21:00",
                endTime: "2020-05-11 20:21:00",
                priority: 3,
                status: 0
              },
              {
                taskId: 6,
                taskName: "测试子任务2",
                lasting: 40,
                startTime: "2020-05-10 16:21:00",
                endTime: "2020-05-11 20:21:00",
                priority: 3,
                status: 0
              },
              {
                taskId: 7,
                taskName: "测试子任务2",
                lasting: 40,
                startTime: "2020-05-10 16:21:00",
                endTime: "2020-05-11 20:21:00",
                priority: 3,
                status: 0
              },
              {
                taskId: 8,
                taskName: "测试子任务2",
                lasting: 40,
                startTime: "2020-05-10 16:21:00",
                endTime: "2020-05-11 20:21:00",
                priority: 3,
                status: 0
              },
              {
                taskId: 9,
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
        //console.log(this.planData)
      }, 1000);
    }
  },
  components: {
    planList,
    handlePlan
  },
  mounted() {
    this.getplanData();
    //console.log(httpReq);
  }
};
</script>
