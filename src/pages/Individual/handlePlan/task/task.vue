<style scoped lang="scss">
</style>

<template>
  <div class="task">
    <div class="taskName">
      <span class="item">{{type?'* 添加计划':'* 修改计划'}}</span>
      <input class="data" />
    </div>
    <div class="pickerCon">
      <div class="startTime">
        <span class="date"></span>
        <span class="clock"></span>
      </div>
      <div class="endTime">
        <span class="date"></span>
        <span class="clock"></span>
      </div>
      <div class="lasting">
        <span class="item"></span>
        <input class="data" />
        <span>分钟</span>
      </div>
      <div class="priority">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        type: Number, // 类型：0-->修改，1-->添加
        task: Object // 一个子任务
    }
};
</script>
