<style scoped lang="scss">
.null {
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80% auto;
  background-image: url(../../../static/images/null.png);
}
.xiala {
  position: fixed;
  top: 0;
  left: 25%;
  width: 2em;
  height: 90%;
  .line {
    position: absolute;
    top: 0;
    right: 75%;
    width: 2px;
    height: 100%;
    background: #ffe55e;
  }
  .gou {
    display: block;
    position: absolute;
    bottom: -2em;
    right: 0;
    width: 2em;
    height: 2em;
    transform-style: preserve-3d;
    transform: rotateY(-180deg);
  }
}
</style>

<template>
  <div class="team">
    <div class="xiala">
      <div class="line"></div>
      <img class="gou" src="../../../static/images/gou.png" />
    </div>
    <team-list v-if="planList" :teamList="planList"></team-list>
    <mypicker :state="pickerState"></mypicker>
    <div v-if="planList.length == 0" class="null"></div>
  </div>
</template>

<script>
// Use Vuex
import store from "./store";
import teamList from "./teamList/teamList.vue";
import mypicker from "./mypicker/mypicker.vue";
import { updateMember } from "../../api/team";

export default {
  computed: {
    pickerState() {
      return store.state.pickerState;
    },
    team() {
      return this.$store.state.teamList;
    },
    planList() {
      return store.state.planList;
    }
  },
  methods: {
    async getTeamData() {
      console.log("刷新");
      await store.dispatch("getTeamList"); // 获取所有团队
      await store.dispatch("getAllTeamPlan"); // 获取所有团队的任务
    }
  },
  data() {
    return {
      shareGroupId: 0,
      userId: 0
    };
  },
  components: {
    teamList,
    mypicker
  },
  async onShow() {
    // 如果有sharedGroup，则保存下来，并提示是否加入队伍
    this.sharedGroup = await this.$store.state.sharedGroup;
    this.userId = await this.$store.state.userInfo.userId || 0;
    console.log("this.sharedGroup :>> ", this.sharedGroup);
    // 在wx.showModal中定义会导致this指向错误，所以直接在这里定义
    const value = {
      groupId: this.sharedGroup.groupId,
      groupName: this.sharedGroup.groupName,
      userId: this.userId,
      type: "add"
    };
    
    if (this.sharedGroup.groupId !== 0) {
      wx.showModal({
        title: "提示",
        content: `确定加入队伍"${value.groupName}  ${value.groupId}"吗`,
        success: async function(res) {
          try {
            // 发送请求，将成员添加进团队
            if (res.confirm) {
              wx.showLoading({
                title: "正在加入...",
                mask: true
              });
              const result = await updateMember(value);
              if (result.data.code == 1)
                wx.showToast({
                  title: "加入成功",
                  icon: "success",
                  duration: 2000
                });
              else {
                wx.showToast({
                  title: "加入失败",
                  icon: "none",
                  duration: 2000
                });
              }
              console.log("添加成功");
            }
            await this.$store.dispatch('setShareGroupId', 0)
          } catch (error) {
            wx.showToast({
              title: "加入失败",
              icon: "none",
              duration: 2000
            });
          }
        }
      });
    }
    this.getTeamData();
  },
  mounted() {
    this.getTeamData();
    console.log("planList :>> ", this.planList);
  }
};
</script>
