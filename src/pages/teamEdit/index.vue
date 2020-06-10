<template>
  <div class="team">
    <div class="list">
      <TeamCard :state="'create'" :teamData="teamData" />
      <TeamCard :state="'edit'" v-for="(team, index) in teamList" :key="index" :teamData="team" @Refresh="getTeamList" />
    </div>
  </div>
</template>

<script>
// Use Vuex
import store from "./store";
import TeamCard from "./component/TeamCard";
import { getCurrentPageUrlWithArgs } from "../../utils";

export default {
  data() {
    return {
      teamData: {
        groupId: 1232,
        groupName: "",
        creatorId: 2,
        limit: ""
      },
      teamList: []
    };
  },
  methods: {
    async getTeamList() {
      await store.dispatch('setTeamList')
      console.log('刷新');
      this.teamList = await store.state.teamList
      console.log(this.teamList);
    }
  },
  components: {
    TeamCard
  },
  onShareAppMessage(res) {  // 分享的回调函数
    if (res.from === "button") {
      return {
        desc: "加入闲鱼特工队吧！",
        path: "/pages/login/main?shareGroupId=" + store.state.shareGroupId
      };
    }
  },
  onShow() {
    this.getTeamList()
  }
};
</script>

<style>
</style>
