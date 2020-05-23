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
      font-weight: bold;
    }
  }
  .dataCon {
    .list {
      display: flex;
      align-items: center;
      margin: 1em auto;
      padding: 0.5em 0;
      width: 90%;
      border-radius: 8px;
      background-color: #fff5c4;
      box-shadow: 2px 3px 5px 0px #eee;
      .left {
        display: inline-block;
        width: 25%;
        text-align: center;
        .startTime {
          font-size: 18px;
          color: #111;
          font-weight: bold;
          line-height: 1em;
        }
        .no-done {
          .need {
            color: #666;
            font-size: 12px;
            line-height: 1.5em;
          }
          .lastTime {
            color: #ff8b77;
            font-size: 12px;
            line-height: 1em;
          }
        }
        .done {
          height: 1.5em;
          background-position: center;
          background-repeat: no-repeat;
          background-size: auto 80%;
          background-image: url(../../../../static/images/clock.png);
        }
      }
      .right {
        display: inline-block;
        width: 75%;
        text-align: left;
        .taskName {
          color: #666;
        }
      }
      .done {
        text-decoration: line-through;
      }
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
      <div class="list" v-for="(item, index) in scheduleList" :key="index">
        <div class="left">
          <div class="startTime">{{item.start_time}}</div>
          <div class="no-done" v-show="!item.status">
            <div class="need">需要</div>
            <div class="lastTime">{{item.lasting}} 分钟</div>
          </div>
          <div class="done" v-show="item.status"></div>
        </div>
        <div class="right" :class="{'done': item.status}">
          <div class="taskName">{{item.taskName}}</div>
        </div>
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
      if (!time) {
        time = new Date();
      }
      let month = time.getMonth() + 1;
      let day = time.getDate();
      return `${month}月${day}日`;
    }
  },
  methods: {},
  mounted() {
    console.log(this.scheduleList);
  }
};
</script>

