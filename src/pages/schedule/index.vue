<template>
  <div class="schedule">
    <h1>日程模块</h1>
    <mypicker></mypicker>
    
  </div>
</template>

<script>
// Use Vuex
import store from './store'
import mypicker from './mypicker/mypicker.vue'

export default {
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    onConfirm() {
      console.log("")
    }
  },
  components: {
    mypicker
  },
  mounted() {
  }
}
</script>

<style>

</style>
