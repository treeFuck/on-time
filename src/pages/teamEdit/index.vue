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
import PlanList from './component/PlanList'
import TeamCard from './component/TeamCard'
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
      },
      memberList: [
        {_id: 1, nickName: '钻', avatarUrl: '../user.png'},
        {_id: 2, nickName: '树', avatarUrl: '../user.png'}, 
        {_id: 3, nickName: '沛', avatarUrl: '../user.png'},
        {_id: 4, nickName: '政', avatarUrl: '../user.png'}, 
        {_id: 5, nickName: '兰', avatarUrl: '../user.png'}, 
      ]
    }
  },
  components: {
    PlanList,
    TeamCard
  },
  methods: {
    createTeam() {
      return false
    },
    exitTeam() {},
    addMember() {},
    removeMember() {}
  },
  mounted() {
    
  },
}
</script>

<style>

</style>
