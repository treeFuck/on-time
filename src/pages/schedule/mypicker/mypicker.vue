<style scoped lang="scss">
.mypicker {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8em;
  font-size: 16px;
  background: #fffbe8;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  .algorithm {
  }
}
</style>

<template>
  <div class="mypicker">
    <div class="algorithm">{{algorithm}}</div>
    <div class="data">
      <span class="year">{{year}}</span>
      <span>年</span>
      <span class="month">{{month}}</span>
      <span>月</span>
      <span class="day">{{day}}</span>
      <span>日</span>
    </div>
    <mp-datepicker ref="mpDatePicker" @onConfirm="onConfirm"></mp-datepicker>
  </div>
</template>

<script>
import store from "../store";
import mpDatepicker from "mpvue-weui/src/date-picker";
export default {
  data() {
    return {
    }
  },
  computed: {
    algorithm() {
      if(!store.state.algorithm){
        return '暂无'
      } else if(store.state.algorithm === '0') {
        return '短作业优先'
      } else if(store.state.date === '1') {
        return '长作业优先';
      } else if(store.state.date === '2') {
        return '优先级调度'
      }
    },
    year() {
      if (!store.state.date) {
        console.log("1");
        return "";
      }
      console.log("2");
      return store.state.date.getFullYear();
    },
    month() {
      if (!store.state.date) {
        return "";
      }
      return store.state.date.getMonth()+1;
    },
    day() {
      if (!store.state.date) {
        return "";
      }
      return store.state.date.getDate();
    }
  },
  components: {
    mpDatepicker
  },
  mounted() {
    
  }
};
</script>

