<template>
  <picker class="picker" mode="multiSelector" :value="value" @change="change">
    <slot></slot>
  </picker>
</template>

<script>
export default {
  props: {
    value: Array,
  },
  methods: {
    change(e) {
      this.$emit("change", e);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>