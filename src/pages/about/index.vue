<style lang="scss" scoped>
.con {
  position: relative;
  margin: 3em auto;
  width: 90vw;
  background-color: #fffbe8;
  border-radius: 20px;
  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -2.5em;
    left: 50%;
    width: 100%;
    height: 5em;
    z-index: 1;
    transform: translateX(-50%);
    .fish {
      display: inline-block;
      position: relative;
      width: 9em;
      height: 5em;
      color: #ffd600;
      font-size: 20px;
      background-repeat: no-repeat;
      background-size: auto 100%;
      background-position: center;
      background-image: url(../../../static/images/fish1.png);
      span {
        position: absolute;
        left: 2em;
        font-weight: bold;
        line-height: 5.5em;
      }
    }
    .left,
    .right {
      display: inline-block;
      height: 2em;
      width: 3em;
      background-repeat: no-repeat;
      background-size: auto 80%;
      background-position: center;
    }
    .left {
      background-image: url(../../../static/images/left.png);
    }
    .right {
      background-image: url(../../../static/images/right.png);
    }
  }
  .dataCon {
    padding: 4em 5vw 1em 5vw;
    img {
      width: 80vw;
      height: 48.43vw;
    }
    .text {
      p {
        margin: 2em 0;
        color: #a08600;
        font-size: 18px;
        line-height: 1.5em;
        text-indent: 2em;
        text-align: justify;
        font-weight: bold;
      }
    }
  }
}
</style>

<template>
  <div class="about">
    <div class="con">
      <div class="top" @click="change">
        <div class="left"></div>
        <div class="fish">
          <span>{{typeStr}}</span>
        </div>
        <div class="right" ></div>
      </div>
      <div class="dataCon">
        <div v-show="type == 'use'">
          <img src="../../../static/images/we1.png" />
          <div class="text">
            <p>永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修禊事也。群贤毕至，少长咸集。此地有崇山峻岭，茂林修竹，又有清流激湍，映带左右，引以为流觞曲水，列坐其次。虽无丝竹管弦之盛，一觞一咏，亦足以畅叙幽情。</p>
            <p>永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修禊事也。群贤毕至，少长咸集。此地有崇山峻岭，茂林修竹，又有清流激湍，映带左右，引以为流觞曲水，列坐其次。虽无丝竹管弦之盛，一觞一咏，亦足以畅叙幽情。</p>
            <p>永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修禊事也。群贤毕至，少长咸集。此地有崇山峻岭，茂林修竹，又有清流激湍，映带左右，引以为流觞曲水，列坐其次。虽无丝竹管弦之盛，一觞一咏，亦足以畅叙幽情。</p>
          </div>
        </div>
        <div v-show="type == 'author'">
          <img src="../../../static/images/we2.png" />
          <div class="text">
            <p>夫人之相与，俯仰一世。或取诸怀抱，悟言一室之内；或因寄所托，放浪形骸之外。虽趣舍万殊，静躁不同，当其欣于所遇，暂得于己，快然自足，不知老之将至；及其所之既倦，情随事迁，感慨系之矣。向之所欣，俯仰之间，已为陈迹，犹不能不以之兴怀，况修短随化，终期于尽！古人云：“死生亦大矣。”岂不痛哉！ 每览昔人兴感之由，若合一契，未尝不临文嗟悼，不能喻之于怀。固知一死生为虚诞，齐彭殇为妄作。</p>
            <p>永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修禊事也。群贤毕至，少长咸集。此地有崇山峻岭，茂林修竹，又有清流激湍，映带左右，引以为流觞曲水，列坐其次。虽无丝竹管弦之盛，一觞一咏，亦足以畅叙幽情。</p>
            <p>永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修禊事也。群贤毕至，少长咸集。此地有崇山峻岭，茂林修竹，又有清流激湍，映带左右，引以为流觞曲水，列坐其次。虽无丝竹管弦之盛，一觞一咏，亦足以畅叙幽情。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "use",
      clickLimit: false
    };
  },
  computed: {
    typeStr() {
      if (this.type == "use") {
        return "使用说明";
      } else {
        return "关于作者";
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
      }, 500);
      console.log("点击");
      if (this.type == "use") {
        this.type = "author";
      } else {
        this.type = "use";
      }
    }
  },
  onLoad(option) {
    this.type = option.type;
    // console.log(this.type);
  }
};
</script>


