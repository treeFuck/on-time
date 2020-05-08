<template>
  <div class="Individual">
    <h1>个人计划模块</h1>
    <div>{{test}}</div>
  </div>
</template>

<script>
// Use Vuex
import store from './store'

export default {
  computed: {
    test() {
      return this.$store.state.test
    }
  },
  methods: {
    
  },
  mounted() {
    setTimeout(()=>{
      this.$store.commit("fun", "222测试数据2")
    }, 1000)
  }
}
</script>

<style>

</style>
