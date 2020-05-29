<style scoped lang="scss">
.mypicker {
  position: fixed;
  left: 3%;
  width: 94%;
  padding: 1em 0;
  font-size: 16px;
  background: #fff5c4;
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
  .input-box {
    display: flex;
    margin: 5px 0;
    color: #a08600;
    label {
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
.mypickerShow {
  top: 0;
}
.mypickerHide {
  top: -15em;
}
</style>

<template>
  <div class="mypicker" :style="offsetTop">
    <div class="xiala">
      <div class="line"></div>
      <img @click="changeIsShow" class="gou" src="../../../../static/images/gou.png" />
    </div>
    <div class="updateForm" v-if="state === 'update'">
      <div class="input-box">
        <label for>*修改队名:</label>
        <input type="text" v-model="teamName" />
      </div>
      <div class="input-box">
        <label for>*修改计划:</label>
        <input type="text" v-model="planName" />
      </div>
    </div>
    <div class="addForm" v-if="state === 'add'">
      <div class="input-box">
        <label for>*选择队伍:</label>
        <input type="text" />
      </div>
      <div class="input-box">
        <label for>*添加计划:</label>
        <input type="text" />
      </div>
    </div>
    <task-form />
    <!-- <my-button color="yellow">完成</my-button> -->
  </div>
</template>

<script>
import store from "../store";
import mpDatepicker from "mpvue-weui/src/date-picker";
import mpPicker from "mpvue-weui/src/picker";
import taskForm from "../taskForm/taskForm";
import myButton from "../../../components/myButton"

export default {
  props: {
    state: String
  },
  data() {
    return {
      mypickerShow: true,
      top: 0,
      teamName: '突突突',
      planName: '白宫行刺计划'
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
    },
    changeIsShow(event) {
      this.mypickerShow = !this.mypickerShow;
      this.top = event.currentTarget.offsetTop;
    }
  },
  computed: {
    offsetTop() {
      return this.mypickerShow ? "top: 0px" : `top: -${this.top - 10}px`;
    }
  },
  components: {
    taskForm,
    myButton
  },
  created() {
  }
};
</script>

