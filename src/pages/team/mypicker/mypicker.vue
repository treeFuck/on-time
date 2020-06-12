<style scoped lang="scss">
.mypicker {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 3%;
  width: 94%;
  padding: 1em 0;
  font-size: 16px;
  background: #fff5c4;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0 0 3px 1px #eee;
  transition: transform 0.5s;
  transform: translateY(-100%);
  .xiala {
    position: absolute;
    top: 0;
    right: 4%;
    width: 2em;
    height: 105%;
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
  transform: translateY(0);
}
</style>

<template>
  <div class="mypicker" :class="{mypickerShow: mypickerShow}">
    <div class="xiala">
      <div class="line"></div>
      <img @click="changeIsShow" class="gou" src="../../../../static/images/gou.png" />
    </div>
    <div class="main">
      <div class="updateForm" v-if="state === 'update'">
        <div class="input-box">
          <label for>*修改计划:</label>
          <input type="text" v-model="taskFormList.planName" />
        </div>
        <taskFormEdit
          v-for="(task, index) in taskFormList.taskList"
          :key="index"
          :formData="task"
          @removeTask="removeTask(index, task)"
          @addTask="addTask"
        />
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
        <div class="taskList">
          <task-form
            ref="addTaskForm"
            v-for="(task, index) in taskList"
            :key="index"
            :formData="task"
            @addTask="addTask"
            @removeTask="removeTask(index)"
          />
        </div>
      </div>
      <div class="btn" v-if="mypickerShow">
        <my-button color="yellow" @click="handleSubmit">完成</my-button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
import mpDatepicker from "mpvue-weui/src/date-picker";
import mpPicker from "mpvue-weui/src/picker";
import taskForm from "../taskForm/taskForm";
import myButton from "../../../components/myButton";
import taskFormEdit from "../taskFormEdit/taskFormEdit";
import { getNowTime } from "../../../utils";
import state from "../../../store/state";

export default {
  props: {
    state: String
  },
  computed: {
    groupList() {
      const group = store.state.teamList;
      let arr = [];
      if (group) {
        group.map(item => {
          arr.push(item.groupName);
        });
      }

      return arr;
    },
    mypickerShow() {
      return store.state.mypickerShow;
    },
    taskFormList() {
      return store.state.taskFormList;
    },
    form() {
      if (this.state === "add")
        return {
          userId: 1,
          taskName: "",
          groupMemberList: [],
          startTime: {},
          endTime: {},
          lasting: 60,
          priority: 3,
          status: 0
        };
    }
  },
  data() {
    return {
      planName: "",
      teamForm: {
        groupName: "",
        groupId: 0
      },
      planForm: null,
      taskList: []
    };
  },
  methods: {
    changeIsShow(event) {
      store.dispatch("setMyPickerIsShow");
      store.dispatch("changePicker", "add");
    },
    selectTeam(event) {
      const index = event.target.value;
      this.teamForm = store.state.teamList[index];

      // 修改子任务模板
      this.planForm.groupMemberList = this.teamForm.groupMemberList;
      this.planForm.groupId = this.teamForm.groupId;
      this.planForm.userId = this.teamForm.groupMemberList[0].userId;
    },
    toEditTeam() {
      wx.navigateTo({
        url: "/pages/teamEdit/main"
      });
    },
    async handleSubmit() {
      if (this.state === "add") {
        // 如果taskList列表中有空，则拒接提交，提醒删除不需要的子计划
        if (this.taskList.length > 0) {
          for (let i in this.taskList) {
            if (this.taskList[i].taskName.trim() === "") {
              wx.showToast({
                title: `子任务不能为空`,
                icon: "none",
                duration: 2000
              });
              return;
            }
          }
        }
        const planName = this.planName;
        const groupId = this.teamForm.groupId;

        // 添加大任务
        await store.dispatch("addGroupPlan", {
          planName,
          groupId,
          taskList: this.taskList
        });
      }
      if (this.state == "update") {
        // 检查是否有空的子计划
        for (let i in this.taskFormList.taskList) {
          if (this.taskFormList.taskList[i].taskName.trim() === "") {
            wx.showToast({
              title: "子计划不能为空，请先删除空的子计划",
              icon: "none",
              duration: 2000
            });
            return;
          }
        }
        await store.dispatch("UpdateGroupPlan", this.taskFormList);
      }
      // 关闭picker
      await store.dispatch("setMyPickerIsShow");
      // 刷新列表
      await store.dispatch("getAllTeamPlan"); // 获取所有团队的任务
    },
    // 添加子计划
    addTask() {
      const date = getNowTime(); // 获取时间
      if (this.state === "create") {
        this.taskList.push({
          // 添加初始化的子计划
          ...date,
          lasting: 60,
          priority: 1,
          status: 0,
          taskName: "",
          taksId: null
        });
      }
      if (this.state === 'update') {
        console.log(this.taskFormList);
        const planId = this.taskFormList.planId
        const userId = this.$store.state.userInfo.userId
        const newTask = {
          ...date,
          lasting: 60,
          priority: 1,
          status: 0,
          taskName: "",
          taksId: null,
          planId,
          userId,
          flag: 0   // 若存在，表明是本地新增的，尚未添加到服务器，可以随意删除
        }
        const teamData = JSON.parse(JSON.stringify(this.taskFormList))
        console.log(teamData);
        // store.dispatch('setTaskForm_addTask', newTask)
      }
    },
    // 删除子计划
    removeTask(index, task) {
      if (this.state === "create") {
        if (this.taskList.length == 1) {
          wx.showToast({
            title: `至少要有一个子计划`,
            icon: "none",
            duration: 2000
          });
          return;
        }
        this.taskList.splice(index, 1);
      }
      if (this.state === "update") {
        if (this.taskFormList.taskList == 1) {
          wx.showToast({
            title: `至少要有一个子计划`,
            icon: "none",
            duration: 2000
          });
          return;
        }
        console.log(task);
        wx.showModal({
          title: "提示",
          content: `确定删除该子计划`,
          success: async res => {
            if (res.confirm) {
              wx.showLoading({
                title: "删除中...",
                mask: true
              });
              await store.dispatch("RemoveTask", task.taskId);
              await store.dispatch("getAllTeamPlan"); // 获取所有团队的任务
              wx.hideLoading();
            }
          }
        });
      }
    }
  },
  components: {
    taskForm,
    myButton,
    taskFormEdit
  },
  created() {
    const date = getNowTime();
    this.planForm = {
      ...date,
      lasting: 60,
      priority: 1,
      status: 0,
      taskName: "",
      taksId: null
    };
    this.taskList.push(this.planForm);
  },
  mounted() {
    console.log("又渲染页面了");
  }
};
</script>

