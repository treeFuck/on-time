<template>
  <div
    :class="buttonClass"
    :style="style"
    @click="click"
    :open-type="openType"
    @getuserinfo="getuserinfo"
  >
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "red"
    },
    openType: {
      type: String,
      default: ""
    },
    btnClass: {
      type: String,
      default: false
    },
  },
  computed: {
    buttonClass() {
      return `my-button ${this.btnClass}`
    }
  },
  data() {
    return {
      Color: "#FFD600",
      BgcColor: "#fff4f0",
      style: ""
    };
  },
  created() {
    this.Color = this._props.color === "red" ? "#ff8a77" : "#FFD600";
    this.BgcColor = this._props.color === "red" ? "#FFE4DF" : "#FFF4BB";
    this.style = `color: ${this.Color}; background-color: ${this.BgcColor}`;
  },
  methods: {
    click(e) {
      this.$emit("click", e);
    },
    getuserinfo(e) {
      this.$emit("getuserinfo", e);
    }
  }
};
</script>

<style lang="scss" scoped>
.my-button {
  margin: 0 20px;
  padding: 10px;
  border-radius: 5pt;
  font-size: large;
  font-weight: bolder;
  width: 80px;
  height: 20px;
  position: relative;
  .content {
    position: absolute;
    top: -15px;
    left: 32px;
  }
}
</style>