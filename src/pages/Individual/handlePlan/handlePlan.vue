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
    right: 3%;
    padding: 10px 0;
    width: 2em;
    height: 100%;
    z-index: 100;
    .line {
      position: absolute;
      top: 0;
      left: 75%;
      width: 3px;
      height: 100%;
      background: #ffe55e;
    }
    .gou {
      display: block;
      position: absolute;
      bottom: -2em;
      left: 0;
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
}
.handlePlanShow {
  transform: translateY(0);
}
</style>

<template>
  <div id="handlePlan" class="handlePlan" :class="{handlePlanShow:handlePlanShow}" ref="handlePlan">
    <div class="xiala">
      <div class="line"></div>
      <img @click="changeIsShow" class="gou" src="../../../../static/images/gou.png" />
    </div>
    <div class="planName">
      <span v-if="type">*修改计划:</span>
      <span v-else>*添加计划:</span>
      <input type="text" v-model="plan.planName" />
    </div>
    <task v-for="(task, index) in plan.taskList" :key="index" :task="task"></task>
    <div class="success" @click="commit">完成</div>
  </div>
</template>

<script>
import store from "../store";
import task from "./task/task.vue";

export default {
  props: {
    state: String
  },
  data() {
    return {
    };
  },
  methods: {
    changeIsShow(event) {
      store.commit("changeShow", !this.handlePlanShow);
    },
    commit() {
      console.table(this.plan);
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
      return store.state.plan;
    },
    handlePlanShow() {
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

