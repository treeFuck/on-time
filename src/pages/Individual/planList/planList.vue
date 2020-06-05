<style scoped lang="scss">
.planList {
  margin: 4em 0;
  transition: margin-top 0.4s;
  .plan {
    position: relative;
    margin: 3em auto;
    padding: 1.5em 0 1em 0;
    width: 95%;
    font-size: 16px;
    border-radius: 15px;
    background-color: rgba(255, 251, 220, 0.8);
    .handle {
      display: flex;
      justify-content: space-between;
      position: absolute;
      right: 1em;
      top: 1.5em;
      width: 6em;
      div {
        width: 1.5em;
        height: 1.5em;
        background-position: center;
        background-repeat: no-repeat;
        background-size: auto 100%;
      }
      .add {
        background-image: url(../../../../static/images/add2.png);
      }
      .edit {
        background-image: url(../../../../static/images/edit.png);
      }
      .del {
        background-image: url(../../../../static/images/del.png);
      }
    }
    .top {
      display: flex;
      align-items: center;
      position: absolute;
      top: -1.5em;
      height: 3em;
      width: 100%;
      color: #ffd600;
      line-height: 3em;
      .fish {
        display: inline-block;
        width: 40%;
        height: 3em;
        font-size: 18px;
        text-align: center;
        line-height: 3.5em;
        background-position: 60% center;
        background-repeat: no-repeat;
        background-size: auto 100%;
        background-image: url(../../../../static/images/fish3.png);
      }
      .planName {
        display: inline-block;
        width: 60%;
        font-size: 18px;
        word-break: break-all;
      }
    }
    .taskList {
      .item {
        margin: 0 auto;
        width: 90%;
        span {
          display: inline-block;
          font-weight: bold;
          font-size: 15px;
          color: #ffd600;
          letter-spacing: 0.1em;
        }
        .endTime {
          width: 25%;
          text-align: center;
        }
        .taskName {
          width: 75%;
          text-align: left;
        }
      }
      .task {
        display: flex;
        align-items: center;
        margin: 0 auto;
        padding: 0.2em 0;
        width: 90%;
        .endTime {
          display: inline-block;
          width: 25%;
          text-align: center;
          span {
            display: block;
            line-height: 1.2em;
          }
          .clock {
            font-weight: bold;
            font-size: 14px;
          }
          .date {
            font-size: 12px;
          }
        }
        .taskName {
          display: inline-block;
          width: 75%;
          text-align: left;
        }
      }
      .done {
        color: #ccc;
        text-decoration: line-through;
      }
    }
  }
}
</style>

<template>
  <div class="planList">
    <div class="plan" v-for="(plan, index1) in planData" :key="index1">
      <div class="handle">
        <div class="add" @click="addPlan"></div>
        <div class="edit" @click="editPlan(plan)"></div>
        <div class="del" @click="delPlan(plan)"></div>
      </div>
      <div class="top">
        <div class="fish">计划{{index1+1}}</div>
        <div class="planName">{{plan.planName}}</div>
      </div>
      <div class="taskList">
        <div class="item">
          <span class="endTime">截止时间</span>
          <span class="taskName">要做的事</span>
        </div>
        <div
          class="task"
          :class="{'done': task.status}"
          v-for="(task, index2) in plan.taskList"
          :key="index2"
          @click="changeStatus(task)"
        >
          <div class="endTime">
            <div v-show="!task.status">
              <span class="clock">{{task.end_clock}}</span>
              <span class="date">{{task.end_date}}</span>
            </div>
            <div v-show="task.status">
              <span>已完成</span>
            </div>
          </div>
          <div class="taskName">{{task.taskName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
import httpReq from "../../../api/Individual.js";
export default {
  props: {
    planData: Object
  },
  data() {
    return {};
  },
  methods: {
    changeStatus(item) {
      this.$wxhttp
        .post({
          url: "/schedule/updateTaskStatus",
          params: {
            taskId: item.taskId,
            status: (!item.status)?1:0
          }
        })
        .then((res) => {
          if(res.data.code == 1) {
            item.status = !item.status;
          }
        });
    },
    delPlan(plan) {
      wx.showModal({
        title: "提示",
        content: `你确定删除计划“${plan.planName}”`,
        success: res => {
          if (res.confirm) {
            wx.showLoading({
              title: "删除中...",
              mask: true
            });
            httpReq.delPlan(plan.planId).then(res => {
              wx.hideLoading();
              if (res.data.code == 1) {
                wx.showToast({
                  title: "删除成功",
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
          }
        }
      });
    },
    editPlan(plan) {
      let nowPlanId = store.state.plan.planId;
      if (!nowPlanId || nowPlanId != plan.planId) {
        store.commit("changePlan", JSON.parse(JSON.stringify(plan)));
      }
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
      store.commit("changeShow", true);
    },
    addPlan() {
      if (store.state.plan.planId != null) {
        store.commit("changePlan", {
          planName: null,
          taskList: [
            {
              taskName: null,
              lasting: null,
              startTime: null,
              endTime: null,
              priority: null,
              status: null
            }
          ]
        });
      }
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
      store.commit("changeShow", true);
    }
  },
  computed: {},
  mounted() {
    // console.log(this.planData);
  }
};
</script>

