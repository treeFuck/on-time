<template>
  <div class="team">
    <div class="list">
      <TeamCard :state="'create'" :teamData="teamData" />
      <TeamCard
        :state="'edit'"
        v-for="(team, index) in teamList"
        :key="index"
        :teamData="team"
        @Refresh="getTeamList"
      />
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
      await store.dispatch("setTeamList");
      this.teamList = await store.state.teamList;
      console.log(this.teamList);
    }
  },
  components: {
    TeamCard
  },
  onShareAppMessage(res) {
    if (res.from === "button") {
      const groupId = res.target.dataset.groupid;
      const groupName = res.target.dataset.groupname;
      return {
        title: `邀请你加入${groupName}`,
        path: `/pages/login/main?groupId=${groupId}&groupName=${groupName}`
      };
    }
    return {
      title: "on-Time",
      path: "/pages/login/main"
    };
  },
  onShow() {
    this.getTeamList();
  }
};
</script>

<style>
</style>
