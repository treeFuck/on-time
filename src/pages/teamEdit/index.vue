<template>
  <div class="team">
    <div class="list">
      <TeamCard :state="'create'" :teamData="teamData" />
      <TeamCard :state="'edit'" v-for="(team, index) in teamList" :key="index" :teamData="team" />
    </div>
  </div>
</template>

<script>
// Use Vuex
import store from './store'
import TeamCard from './component/TeamCard'
import { getCurrentPageUrlWithArgs } from '../../utils'

export default {
  computed: {
    teamList() {
      return this.$store.state.teamList
    }
  },
  data() {
    return {
      teamData: {
        groupId: 1232,
        groupName: '',
        creatorId: 2,
        limit: ''
      }
    }
  },
  components: {
    TeamCard
  },
  onShareAppMessage(res) {
    if(res.from === 'button') {
      console.log('dinaji');
      console.log(res.webViewUrl);
    }
    return {
      desc: "加入闲鱼特工队吧！",
      path: '/pages/login/main?groupId=' + store.state.shareGroupId
    }
  }
}

</script>

<style>

</style>
