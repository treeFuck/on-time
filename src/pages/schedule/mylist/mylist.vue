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
    .name {
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
      <div class="date">4月5日</div>
      <div class="name">今天啥也不想干</div>
    </div>
    <div class="dataCon">
      <div class="list" :class="{'done': item.status}" v-for="(item, index) in scheduleList" :key="index">
        <span class="startTime">{{item.startTime}}</span>
        <span class="taskName">
          {{item.taskName}}
          <span class="lastTime">（预计耗时：{{item.lasting}}分钟）</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    scheduleList: Object
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    console.log(this.scheduleList);
  }
};
</script>

