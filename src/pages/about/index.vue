<style lang="scss" scoped>
.con {
  position: relative;
  // perspective: 500px; 
  .usePage {
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -45vw;
    overflow: hidden;
    backface-visibility: hidden;
    transition: opacity 1s;
    // perspective: 1800px; 
  }
  .authorPage {
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -45vw;
    overflow: hidden;
    backface-visibility: hidden;
    transition: opacity 1s;
    // perspective: 1800px; 
  }
  .font {
  }
  .back {
    opacity: 0;
    height: 0;
  }
}
</style>

<template>
  <div class="about">
    <div class="con">
      <div :class="usePageClass" :animation="useAnimation">
        <use @change="change"></use>
      </div>
      <div :class="authorPageClass" :animation="authorAnimation">
        <author @change="change"></author>
      </div>
    </div>
  </div>
</template>

<script>
import use from "./use/use.vue";
import author from "./author/author.vue";
export default {
  data() {
    return {
      type: "use",
      clickLimit: false,
      useAnimation: null,
      authorAnimation: null
    };
  },
  components: {
    use,
    author
  },
  computed: {
    usePageClass() {
      if (this.type == "use") {
        return "usePage font";
      } else {
        return "usePage back";
      }
    },
    authorPageClass() {
      if (this.type == "author") {
        return "authorPage font";
      } else {
        return "authorPage back";
      }
    }
  },
  methods: {
    change() {
      if (this.clickLimit) {
        wx.showToast({
          title: "点击频繁",
          icon: "none",
          duration: 1000
        });
        return;
      }
      this.clickLimit = true;
      setTimeout(() => {
        this.clickLimit = false;
      }, 1200);
      this.useAnimation.export();
      this.authorAnimation.export();
      if (this.type == "author") {
        this.useAnimation.rotateY(0).step();
        this.authorAnimation.rotateY(180).step();
      } else {
        this.useAnimation.rotateY(180).step();
        this.authorAnimation.rotateY(0).step();
      }
      setTimeout(() => {
        if (this.type == "use") {
          this.type = "author";
        } else {
          this.type = "use";
        }
      }, 400);
    }
  },
  onLoad(option) {
    this.type = option.type;
  },
  mounted() {
    this.useAnimation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease-out",
      delay: 0
    });
    this.authorAnimation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease-out",
      delay: 0
    });
    if (this.type == "use") {
      this.useAnimation.export();
      this.authorAnimation.export();
      this.useAnimation.rotateY(0).step();
      this.authorAnimation.rotateY(180).step();
    } else {
      this.useAnimation.export();
      this.useAnimation.export();
      this.useAnimation.rotateY(180).step();
      this.authorAnimation.rotateY(0).step();
    }
  }
};
</script>


