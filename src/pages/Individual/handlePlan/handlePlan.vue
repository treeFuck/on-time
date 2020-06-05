<style scoped lang="scss">
.handlePlan {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 3%;
  width: 94%;
  padding: 1em 0;
  font-size: 16px;
  background: #fff5c4;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0 0 3px 1px #eee;
  transition: transform 0.5s;
  transform: translateY(-100%);
  .xiala {
    position: absolute;
    top: 0;
    right: 0%;
    padding: 10px 0;
    width: 1em;
    height: 100%;
    z-index: 100;
    .line {
      position: absolute;
      top: 0;
      left: 0%;
      width: 3px;
      height: 100%;
      background: #ffe55e;
    }
    .gou {
      display: block;
      position: absolute;
      padding: 2em;
      bottom: -4em;
      left: -3.5em;
      width: 2em;
      height: 2em;
    }
  }
  .planName {
    display: flex;
    margin: 5px 0;
    color: #a08600;
    span {
      display: inline-block;
      width: 30%;
      text-align: center;
      padding-right: 5px;
    }
    input {
      display: inline-block;
      background-color: #fff;
      border-radius: 5pt;
      width: 63%;
      box-sizing: border-box;
      // padding: 5px;
      text-align: center;
    }
  }
  .success {
    position: absolute;
    bottom: -2.5em;
    left: 50%;
    width: 5em;
    height: 2em;
    color: #ffd600;
    line-height: 2em;
    text-align: center;
    font-weight: bold;
    border-radius: 4px;
    transform: translateX(-50%);
    background-color: #fff5c4;
    box-shadow: 0 0 5px 1px #eee;
  }
}
.handlePlanShow {
  transform: translateY(0);
}
</style>

<template>
  <div id="handlePlan" ref="handlePlan" class="handlePlan" :class="{handlePlanShow:handlePlanShow}">
    <div class="xiala">
      <div class="line"></div>
      <img @click="changeIsShow" class="gou" src="../../../../static/images/gou.png" />
    </div>
    <div class="planName">
      <span v-if="type">*修改计划:</span>
      <span v-else>*添加计划:</span>
      <input type="text" v-model="plan.planName" />
    </div>
    <task
      v-for="(task, index) in plan.taskList"
      :key="index"
      :task="task"
      @delTask="delTask(index)"
      @addTask="addTask"
    ></task>
    <div v-show="handlePlanShow" class="success" @click="commit">完成</div>
  </div>
</template>

<script>
import store from "../store";
import task from "./task/task.vue";
import httpReq from "../../../api/Individual.js";
import { getTimeNum } from "../../../utils/index";
export default {
  props: {
    state: String
  },
  data() {
    return {
      delTaskList: []
    };
  },
  methods: {
    changeIsShow(event) {
      store.commit("changeShow", !this.handlePlanShow);
    },
    // 点击完成
    commit() {
      if (this.type) {
        // 修改计划
        this.updatePlan();
      } else {
        // 添加计划
        this.addPlan();
      }
    },
    // 判断持续时间是否是大于0的数字
    judegNumber(data) {
      let num = Number(data);
      if (isNaN(num)) {
        return false;
      }
      if (num < 1) {
        return false;
      }
      return true;
    },
    // 判断全部输入是否正确
    judgeData() {
      if (!this.plan.planName) {
        // 计划名字不能为空
        wx.showToast({
          title: "计划名字不能为空",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      let len = this.plan.taskList.length;
      if (len == 0) {
        // 一个计划至少要有一个任务
        wx.showToast({
          title: "一个计划至少要有一个任务",
          icon: "none",
          duration: 1500
        });
        return false;
      }
      for (let i = 0; i < len; i++) {
        if (!this.plan.taskList[i].taskName) {
          // 子任务名字不能为空
          wx.showToast({
            title: "子任务名字不能为空",
            icon: "none",
            duration: 1500
          });
          return false;
        }
        if (!this.judegNumber(this.plan.taskList[i].lasting)) {
          // 子任务持续时间必须为大于0的数字
          wx.showToast({
            title: "持续时间必须为大于0的数字",
            icon: "none",
            duration: 1500
          });
          return false;
        }
        if (
          getTimeNum(this.plan.taskList[i].startTime) >=
          getTimeNum(this.plan.taskList[i].endTime)
        ) {
          // 子任务的开始时间不能大于结束时间
          wx.showToast({
            title: "开始时间不能大于结束时间",
            icon: "none",
            duration: 1500
          });
          return false;
        }
      }
      return true;
    },
    // 发起请求，添加一个计划
    addPlan() {
      console.log("添加计划", this.plan);
      if (!this.judgeData()) {
        return;
      }
      wx.showLoading({
        title: "添加中...",
        mask: true
      });
      httpReq.addPlan(this.plan).then(res => {
        wx.hideLoading();
        if (res.data.code == 1) {
          wx.showToast({
            title: "添加成功",
            icon: "success",
            duration: 2000
          });
          // 重置handlePlan
          store.commit("changeShow", false);
          store.commit("refreshPlan");
          // 刷新计划数据
          this.$emit("Refresh");
        } else {
          wx.showToast({
            title: res.data.message,
            icon: "none",
            duration: 2000
          });
        }
      });
    },
    // 发起请求，删除一个任务
    httpDelTask(taskId) {
      return new Promise((resolve, reject) => {
        httpReq.delTask(taskId).then(res => {
          if (res.data.code == 1) {
            resolve(1);
          } else {
            reject();
          }
        });
      });
    },
    // 发起请求，更新一个计划
    updatePlan() {
      if (!this.judgeData()) {
        return;
      }
      let promiseArr = [];
      let len = this.delTaskList.length;
      wx.showLoading({
        title: "修改中...",
        mask: true
      });
      for (let i = 0; i < len; i++) {
        promiseArr.push(this.httpDelTask(this.delTaskList[i].taskId));
      }
      Promise.all(promiseArr).then(res => {
        console.log("删除子任务结果", res);
        wx.hideLoading();
        httpReq.updatePlan(this.plan).then(res => {
          console.log("修改结果", res);
          if (res.data.code == 1) {
            wx.showToast({
              title: "修改成功",
              icon: "success",
              duration: 2000
            });
          } else {
            wx.showToast({
              title: res.data.message,
              icon: "none",
              duration: 2000
            });
          }
          // 重置handlePlan
          store.commit("changeShow", false);
          store.commit("refreshPlan");
          // 刷新计划数据
          this.$emit("Refresh");
        });
      });
      // console.log("修改计划", this.plan);
      // console.log("删除子任务", this.delTaskList);
    },
    // 添加一个任务数据
    addTask() {
      store.state.plan.taskList.push({
        taskName: "",
        lasting: 10,
        startTime: null,
        endTime: null,
        priority: 1,
        status: 0
      });
    },
    // 删除任务数组里索引为index的元素
    delTask(index) {
      if (this.plan.taskList.length == 1) {
        // 留一个不删
        wx.showToast({
          title: "一个计划至少要有一个任务",
          icon: "none",
          duration: 1500
        });
        return;
      }
      let delTask = store.state.plan.taskList.splice(index, 1)[0];
      if (this.type && delTask.taskId) {
        // 编辑模式下，有taskId，说明是要删除的任务，放入delTaskList
        this.delTaskList.push(delTask);
      }
    }
  },
  computed: {
    type() {
      if (store.state.plan.planId) {
        return true; // 修改
      }
      return false; // 新增
    },
    plan() {
      this.delTaskList = [];
      // 更新要编辑的计划时，把待删除任务置空
      return store.state.plan;
    },
    handlePlanShow() {
      if (store.state.handlePlanShow == true) {}
      return store.state.handlePlanShow;
    }
  },
  components: {
    task
  },
  mounted() {
    // console.log(this.type)
  },
  created() {}
};
</script>

