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
  computed: {
    sharedGroup() {
      return store.state.sharedGroup;
    }
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
    console.log(store.state.sharedGroup);
    const groupId = store.state.sharedGroup.groupId;
    const groupName = store.state.sharedGroup.groupName;
    if (res.from === "button") {
      console.log("groupId :>> ", store.state.sharedGroup.groupId);
      console.log("groupName :>> ", store.state.sharedGroup.groupName);
      return {
        title: `${groupName} 触发转发`,
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
