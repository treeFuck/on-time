<style scoped lang="scss">
.mylist {
  position: relative;
  margin: 8.5em auto 0 auto;
  padding: 2em 0 1em 0;
  width: 95%;
  font-size: 16px;
  border-radius: 15px;
  background-color: rgba(255, 251, 220, 0.8);
  .top {
    position: absolute;
    top: -2em;
    height: 4em;
    width: 100%;
    line-height: 4em;
    color: #ffd600;
    .date {
      display: inline-block;
      width: 45%;
      font-size: 18px;
      text-align: center;
      background-position: 60% -0.15em;
      background-repeat: no-repeat;
      background-size: auto 100%;
      background-image: url(../../../../static/images/fish3.png);
    }
    .algorithm {
      display: inline-block;
      width: 55%;
      font-size: 18px;
    }
  }
  .dataCon {
    .list {
      display: flex;
      align-items: center;
      margin: 0.5em 0;
      .startTime {
        display: inline-block;
        width: 25%;
        text-align: center;
        color: #111;
        font-weight: bold;
      }
      .taskName {
        display: inline-block;
        width: 75%;
        text-align: left;
        color: #666;
        .lastTime {
          color: #999;
        }
      }
    }
    .done {
        text-decoration: line-through;
    }
  }
}
</style>

<template>
  <div class="mylist">
    <div class="top">
      <div class="date">{{date}}</div>
      <div class="algorithm">{{algorithm}}</div>
    </div>
    <div class="dataCon">
      <div class="list" :class="{'done': item.status}" v-for="(item, index) in scheduleList" :key="index">
        <span class="startTime">{{item.start_time}}</span>
        <span class="taskName">
          {{item.taskName}}
          <span class="lastTime">（预计耗时：{{item.lasting}}分钟）</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  props: {
    scheduleList: Object
  },
  data() {
    return {};
  },
  computed: {
    algorithm() {
      if (store.state.algorithm == 0) {
        return "短作业优先";
      } else if (store.state.algorithm == 1) {
        return "长作业优先";
      } else if (store.state.algorithm == 2) {
        return "优先级调度";
      }
    },
    date() {
      let time = store.state.date;
      if(!time) {
        time = new Date();
      }
      let month = time.getMonth() + 1;
      let day = time.getDate();
      return `${month}月${day}日`;
    },
  },
  methods: {},
  mounted() {
    console.log(this.scheduleList);
  }
};
</script>

