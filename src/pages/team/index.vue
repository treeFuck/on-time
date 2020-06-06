<style scoped lang="scss">
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
  <div class="Individual">
    <div class="xiala">
      <div class="line"></div>
      <img class="gou" src="../../../static/images/gou.png" />
    </div>
    <team-list v-if="planList" :teamList="planList"></team-list>
    <mypicker :state="pickerState" ></mypicker>
    <mp-modal ref="mpModal" title="提示" content="是否加入队伍" showCancel="true" @confirm="confirm" @cancel="cancel"></mp-modal>
  </div>
</template>

<script>
// Use Vuex
import store from "./store";
import teamList from "./teamList/teamList.vue";
import mypicker from "./mypicker/mypicker.vue";
import mpModal from 'mpvue-weui/src/modal';

export default {
  computed: {
    pickerState() {
      return store.state.pickerState
    },
    team() {
      return this.$store.state.teamList
    },
    planList() {
      return store.state.planList
    }
  },
  methods: {
    getTeamData() {
      this.$store.dispatch("getTeamList") // 获取团队列表
      store.dispatch('getAllTeamPlan')  // 获取所有团队的任务
    },
    confirm() {
      const data = {
        userId: this.$store.state.userInfo.userId,
        groupId: this.shareGroupId,
        type: 'add'
      }
      store.dispatch('updateMember', data)
    },
    cancel(){
      console.log('拒接加入');
    }
  },
  data() {
    return {
      shareGroupId: 0
    }
  },
  components: {
    teamList,
    mypicker,
    mpModal
  },
  onShow() {
    this.shareGroupId = this.$root.$mp.query.groupId || 0
    if(this.shareGroupId !== 0) {
      this.$refs.mpModal.show();
    }
    this.getTeamData();
  },
  mounted() {
    this.getTeamData();
  }
};
</script>
