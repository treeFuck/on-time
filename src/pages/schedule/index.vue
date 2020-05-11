<template>
  <div class="schedule">
    <h1>日程模块</h1>
    <picker></picker>
    
  </div>
</template>

<script>
// Use Vuex
import store from './store'
import picker from './picker/picker'

export default {
  computed: {
  },
  methods: {
    onConfirm() {
      console.log("")
    }
  },
  components: {
    picker
  },
  mounted() {

  }
}
</script>

<style>

</style>
