<style scoped>
.picker {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8em;
  font-size: 16px;
  background: #fffbe8;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.picker .algorithm {
}
</style>

<template>
  <div class="picker">
    <div class="algorithm">{{algorithm}}</div>
    <div class="data">
      <span class="year">{{year}}</span>
      <span>年</span>
      <span class="month">{{month}}</span>
      <span>月</span>
      <span class="day">{{date}}</span>
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
      algorithm: "",
      date: ""
    };
  },
  computed: {
    year() {
      if (!store.state.date) {
        console.log("1")
        return "";
      }
      console.log("2")
      return store.state.date.getFullYear();
    },
    month() {
      if (!store.state.date) {
        return "";
      }
      return store.state.date.getMonth();
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
    console.log(this.year);
    store.commit('changeDate', new Date())
    console.log(this.year);
    setTimeout(()=>{this.date = '1233'; console.log(this.date)},1000)
  }
};
</script>

