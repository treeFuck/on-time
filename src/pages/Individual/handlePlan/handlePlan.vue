<style scoped lang="scss">
.handlePlan {
  position: fixed;
  left: 3%;
  width: 94%;
  // height: 4em;
  padding: 1em 0;
  font-size: 16px;
  background: #FFF5C4;
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
}
.mypickerShow {
  top: 0;
}
.mypickerHide {
  top: -6em;
}
</style>

<template>
  <div class="handlePlan" :class="{'mypickerShow': mypickerShow, 'mypickerHide': !mypickerShow}">
    <div class="xiala">
      <div class="line"></div>
      <img @click="mypickerShow=!mypickerShow" class="gou" src="../../../../static/images/gou.png" />
    </div>
    <div class="plan">
      <div class="planNmae">
        <span class="item"></span>
        <input class="data">
      </div>
      <div class="taskList">
        
      </div>
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

