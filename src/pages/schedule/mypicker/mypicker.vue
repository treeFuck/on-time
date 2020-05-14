<style scoped lang="scss">
.mypicker {
  position: absolute;
  left: 3%;
  width: 94%;
  height: 4em;
  padding: 1em 0;
  font-size: 16px;
  background: #fffbe8;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0 0 3px 1px #eee;
  transition: top 0.5s;
  .xiala {
    position: absolute;
    top: 0;
    right: 3%;
    width: 2em;
    height: 120%;
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
  .algorithm {
    display: inline-block;
    width: 35%;
    height: 4em;
    line-height: 4em;
    text-align: center;
    background-image: url(../../../../static/images/fish1.png);
    background-position: center;
    background-size: auto 4em;
    background-repeat: no-repeat;
  }
  .data {
    display: inline-block;
    width: 65%;
    height: 4em;
    line-height: 4em;
    text-align: center;
    span {
      display: inline-block;
      height: 4em;
      background-position: center;
      background-repeat: no-repeat;
      background-size: auto 2.5em;
    }
    .year {
      width: 4.5em;
      background-image: url(../../../../static/images/fish1.png);
    }
    .month {
      width: 2.5em;
      background-image: url(../../../../static/images/fish2.png);
    }
    .day {
      width: 2.5em;
      background-image: url(../../../../static/images/fish2.png);
    }
  }
}
.mypickerShow {
  top: 0;
}
.mypickerHide {
  top: -6em;
}
</style>

<template>
  <div class="mypicker" :class="{'mypickerShow': mypickerShow, 'mypickerHide': !mypickerShow}">
    <div class="xiala">
      <div class="line"></div>
      <img @click="mypickerShow=!mypickerShow" class="gou" src="../../../../static/images/gou.png" />
    </div>
    <div class="algorithm" @click="pickAlgorithm">{{algorithm}}</div>
    <div class="data" @click="pickDate">
      <span class="year">{{year}}</span>
      <span>年</span>
      <span class="month">{{month}}</span>
      <span>月</span>
      <span class="day">{{day}}</span>
      <span>日</span>
    </div>
    <mp-picker
      ref="algorithmPicker"
      @onConfirm="confirmAlgorithm"
      :pickerValueArray="algorithmArray"
    ></mp-picker>
    <mp-datepicker ref="datePicker" @onConfirm="confirmDate"></mp-datepicker>
  </div>
</template>

<script>
import store from "../store";
import mpDatepicker from "mpvue-weui/src/date-picker";
import mpPicker from "mpvue-weui/src/picker";

export default {
  data() {
    return {
      mypickerShow: false,
      algorithmArray: [
        {
          label: "短作业优先",
          value: 0
        },
        {
          label: "长作业优先",
          value: 1
        },
        {
          label: "优先级调度",
          value: 2
        }
      ]
    };
  },
  methods: {
    pickAlgorithm() {
      this.$refs.algorithmPicker.show();
    },
    pickDate() {
      this.$refs.datePicker.show();
    },
    confirmAlgorithm(pick) {
      store.commit("changeAlgorithm", pick.value[0]);
    },
    confirmDate(pick) {
      store.commit("changeDate", new Date(pick.value));
    }
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
      return store.state.date;
    },
    year() {
      if (!store.state.date) {
        return "";
      }
      return store.state.date.getFullYear();
    },
    month() {
      if (!store.state.date) {
        return "";
      }
      return store.state.date.getMonth() + 1;
    },
    day() {
      if (!store.state.date) {
        return "";
      }
      return store.state.date.getDate();
    }
  },
  components: {
    mpDatepicker,
    mpPicker
  },
  mounted() {}
};
</script>

