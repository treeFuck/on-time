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
  .main {
    max-height: 380px;
    overflow: auto;
  }
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
      width: 60%;
      box-sizing: border-box;
      padding: 5px;
      text-align: center;
      min-height: 32px;
    }
    .add {
      padding-left: 10px;
      width: 25px;
      height: 25px;
    }
    .picker {
      width: 50%;
      border-radius: 5pt;
      background-color: #fff;
      box-sizing: border-box;
      padding: 5px 10px;
      position: relative;
      .down {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 15px;
        height: 15px;
      }
    }
  }
  .btn {
    position: absolute;
    bottom: -50px;
    left: 35%;
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
    <div class="main">
      <div class="updateForm" v-if="state === 'update'">
        <div class="input-box">
          <label for>*修改队名:</label>
          <input type="text" v-model="teamForm.groupName" />
        </div>
        <div class="input-box">
          <label for>*修改计划:</label>
          <input type="text" v-model="planName" />
        </div>
      </div>
      <div class="addForm" v-if="state === 'add'">
        <div class="input-box">
          <label for>*选择队伍:</label>
          <picker class="picker" mode="selector" :range="groupList" @change="selectTeam">
            <span>{{teamForm.groupName}}</span>
            <img class="down" src="../../../../static/images/down.png" alt />
          </picker>
          <img class="add" src="../../../../static/images/add2.png" @click="toEditTeam" alt />
        </div>
        <div class="input-box">
          <label for>*添加计划:</label>
          <input type="text" v-model="planName" />
        </div>
      </div>
      <task-form :formData="form" />
    </div>
    <div class="btn">
      <my-button color="yellow" @click="handleSubmit">完成</my-button>
    </div>
  </div>
</template>

<script>
import store from "../store";
import mpDatepicker from "mpvue-weui/src/date-picker";
import mpPicker from "mpvue-weui/src/picker";
import taskForm from "../taskForm/taskForm";
import myButton from "../../../components/myButton";

export default {
  props: {
    state: String
  },
  computed: {
    groupList() {
      const group = this.$store.state.teamList
      let arr = []
      group.map(item => {
        arr.push(item.groupName)
      })
      return arr
    },
    mypickerShow() {
      return store.state.mypickerShow
    },
    offsetTop() {
      return this.mypickerShow ? "top: 0px" : `top: -32em;`;
    },
  },
  data() {
    return {
      planName: "",
      teamForm: {
        groupName: '',
        groupId: 0
      },
      form: {
        userId: 1,
        taskName: '',
        groupMemberList: [{
          id: 1,
          nickName: "政",
          avatar:
            "https://wx.qlogo.cn/mmopen/vi_32/krwDIf6c0aib75H4LxmR7LzJ7WahDxJrr7zZew9y4iaztssNic0iar5IGQaXVWFpQicgSKHpZjF1ZPunIuV9tPaAiarQ/132"
        }],
        startTime: {},
        endTime: {},
        lasting: 60,
        priority: 3,
        status: 0
      }
    };
  },
  methods: {
    changeIsShow(event) {
      store.dispatch('setMyPickerIsShow')
      store.dispatch('changePicker', 'add')
    },
    selectTeam(event) {
      const index = event.target.value
      this.teamForm = this.$store.state.teamList[index]
      // 修改子任务模板
      this.form.groupMemberList = this.teamForm.groupMemberList
      this.form.groupId = this.teamForm.groupId
      console.log(this.form);
    },
    toEditTeam() {
      wx.navigateTo({
        url: "/pages/teamEdit/main"
      })
    },
    handleSubmit() {
      if(this.state === 'add') {
        const planName = this.planName
        const groupId = this.teamForm.groupId

        // 格式化开始时间和结束时间
        const startTime = this.form.startTime.date.join('-') + ' ' + this.form.startTime.time.join(':')
        const endTime = this.form.endTime.date.join('-') + ' ' + this.form.endTime.time.join(':')

        let task = this.form
        task = { ...task, startTime, endTime }

        // 添加大任务
        store.dispatch('addGroupPlan', { 
          planName,
          groupId,
          taskList: [task]
         })

        // 关闭picker
        store.dispatch('setMyPickerIsShow')
      }
    }
  },
  components: {
    taskForm,
    myButton
  },
  created() {}
};
</script>

