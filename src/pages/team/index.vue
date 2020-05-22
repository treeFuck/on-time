<template>
  <div class="team">
    <div class="list">
      <div class="member" v-for="(item, index) in memberList" :key="index">{{item.nickName}}</div>
      <PlanList :toDoList="todoList" :memberList="memberList" />
    </div>
  </div>
</template>

<script>
// Use Vuex
import store from './store'
import PlanList from './component/PlanList'
export default {
  data() {
    return {
      teamData: {
        group_id: 1232,
        group_name: '攻城狮',
        creator_id: 'zuan',
        limit: 5
      },
      toDoList: [],
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
    PlanList
  },
  computed: {
  },
  methods: {
    createTeam() {
      return 
    },
    exitTeam() {},
    addMember() {},
    removeMember() {}
  },
  created() {
    
  },
}
</script>

<style>

</style>
