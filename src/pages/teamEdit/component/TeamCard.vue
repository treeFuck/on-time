<template>
  <div class="teamCard" :class="state == 'create' ? 'createColor1' : 'editColor1'">
    <div class="title" :class="state == 'create' ? 'createColor2' : 'editColor2'">
      <p v-if="state === 'create'">新建队伍</p>
      <p v-else>管理队伍</p>
    </div>
    <div class="main">
      <div class="left">
        <div class="input-box">
          <label for="teamName">编辑队名 :</label>
          <input v-if="state === 'create'" v-model="groupName" type="text" name="teamName-create" />
          <input v-else v-model="teamData.groupName" type="text" name="teamName" />
        </div>
        <div class="input-box">
          <label for="limit">队员上限 :</label>
          <input v-if="state === 'create'" v-model="limit" type="text" name="limit-create" />
          <input v-else v-model="teamData.limit" type="text" name="limit" />
        </div>
        <div class="input-box" v-if="state !== 'create'">
          <label for="invite">成员列表 :</label>
          <button open-type="share" class="share" @click="invite">邀请成员</button>
        </div>
      </div>
      <div class="right">
        <p>队长</p>
        <img :src="avatar" alt />
      </div>
    </div>
    <div class="avatarList">
      <img
        v-for="(user, index) in teamData.groupMemberList"
        :key="index"
        :src="user.wechatIcon"
        alt
      />
    </div>
    <div v-if="state === 'create'" class="btn-box">
      <my-button @click="createTeam" :color="'red'">完成</my-button>
    </div>
    <div v-else class="btn-box">
      <my-button @click="deleteTeam" :color="'yellow'">退出</my-button>
      <my-button @click="editTeam" :color="'yellow'">完成</my-button>
    </div>
  </div>
</template>

<script>
import myButton from "../../../components/myButton";
import store from "../store";
import { deleteGroup } from "../../../api/team";

export default {
  name: "TeamCard",
  components: {
    myButton
  },
  props: {
    state: String,
    teamData: Object
  },
  computed: {
    avatar() {
      if (this.state === "create")
        return (
          this.$store.state.userInfo.avatarUrl || "/pages/teamEdit/user.png"
        );
      return this.teamData.groupMemberList[0].wechatIcon;
    }
  },
  data() {
    return {
      groupName: "",
      limit: "",
      member: []
    };
  },
  methods: {
    async invite() {
      // 设置你想分享的团队的ID
      const sharedGroup = {
        groupId: this.teamData.groupId,
        groupName: this.teamData.groupName
      }
      await store.dispatch("setShareGroup", sharedGroup);
    },
    async createTeam() {
      console.log("创建按钮");
      const teamName = this.groupName;
      const limit = this.limit;
      await store.dispatch("AddTeam", { groupName: teamName, limit });
      wx.switchTab({ url: "/pages/team/main" });
    },
    async deleteTeam() {
      console.log("当前的信息 :>> ", this.teamData);
      const { groupId, groupName } = this.teamData;
      wx.showModal({
        title: "提示",
        content: `确定退出队伍"${groupName}"？`,
        success: async res => {
          try {
            if (res.confirm) {
              const { data } = await deleteGroup(groupId);
              if (data.code == 1) {
                wx.showToast({
                  title: "退出成功",
                  icon: "none",
                  duration: 2000
                });
                // 刷新计划数据
                this.$emit("Refresh");
              }
            }
          } catch (error) {
            console.log("error :>> ", error);
            wx.showToast({
              title: "退出失败",
              icon: "none",
              duration: 2000
            });
          }
        }
      });
    },
    editTeam() {
      const teamName = this.teamData.groupName;
      const limit = this.limit;
    }
  },
  onShow() {
    // 若是create卡片，则重置输入框
    if (this.state === "create") {
      this.groupName = "";
      this.limit = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.createColor1 {
  color: #ff8a77;
  background-color: #fff4f0;
}
.editColor1 {
  color: #ffd600;
  background-color: #fffbe8;
}
.createColor2 {
  color: #ff8a77;
  background-color: #ffdcd4;
}
.editColor2 {
  background-color: #fff4bb;
  color: #ffd600;
}
.teamCard {
  border-radius: 5pt;
  margin: 20px;
  .title {
    display: flex;
    justify-content: center;
    font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
    font-size: 17pt;
    font-weight: bold;
    height: 20pt;
    border-radius: 5pt 5pt 0 0;
    position: relative;
    p {
      position: absolute;
      top: -80%;
    }
  }
  .main {
    display: flex;
    padding-top: 1em;
    .left {
      width: 80%;
      .input-box {
        display: flex;
        justify-content: space-around;
        align-items: center;
        label {
          font-size: 13pt;
        }
        input {
          border-radius: 10px;
          text-align: center;
          width: 50%;
          background-color: #ffffff;
        }
        .share {
          margin: 0;
          padding: 0;
          height: 30px;
          line-height: 30px;
          border-radius: 10px;
          outline: none;
          text-align: center;
          width: 50%;
          background-color: #ffffff;
          color: #ffd600;
          font-size: 12pt;
          &::after {
            border: 1px solid transparent;
          }
        }
      }
    }
    .right {
      padding-left: 10px;
      p {
        text-align: center;
      }
      img {
        width: 36pt;
        height: 36pt;
        border-radius: 100%;
      }
    }
  }
  .avatarList {
    padding-top: 1em;
    display: flex;
    justify-content: center;
    img {
      width: 24pt;
      height: 24pt;
      border-radius: 100%;
    }
  }
  .btn-box {
    padding-top: 1em;
    display: flex;
    justify-content: center;
  }
}
</style>