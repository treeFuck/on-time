<style lang="scss" scoped>
.author {
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
      background-image: url(../../../../static/images/fish1.png);
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
      background-image: url(../../../../static/images/left.png);
    }
    .right {
      background-image: url(../../../../static/images/right.png);
    }
  }
  .dataCon {
    padding: 4em 5vw 1em 5vw;
    img {
      width: 80vw;
      height: 48.43vw;
    }
    .text {
      .item1 {
        .title1 {
          font-size: 20px;
          font-weight: bold;
          line-height: 2em;
        }
        .p1 {
          margin-bottom: 1em;
          color: #ae961d;
          font-size: 17px;
          line-height: 1.5em;
          text-align: justify;
          text-indent: 2em;
          font-weight: bold;
        }
        .url {
          color: #f40;
          font-size: 16px;
          text-indent: 0em;
          // text-align: center;
          word-break: break-all;
          font-weight: normal;
        }
        .item2 {
          .title2 {
            font-size: 18px;
            line-height: 2em;
            font-weight: bold;
          }
          .p2 {
            margin-bottom: 1em;
            color: #ae961d;
            font-size: 16px;
            line-height: 1.5em;
            text-indent: 2em;
            text-align: justify;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="author">
    <div class="top" @click='click'>
      <div class="left"></div>
      <div class="fish">
        <span>关于作者</span>
      </div>
      <div class="right"></div>
    </div>
    <div class="dataCon">
      <img src="../../../../static/images/we2.png" />
      <div class="text">
        <div class="item1">
          <p class="p1">这里是『S.L.N』攻城狮团队。</p>
          <p class="p1">这是一个为了不敷衍地完成软件工程课作业而诞生的小程序。</p>
          <p class="p1">制作人员包括帅帅的队长阿沛、帅帅的后台梓豪、帅帅的后台阿柴、帅帅的前端树干、帅帅的前端其钻、帅帅的设计Max。</p>
          <p class="p1">如果觉得有什么不妥的话，可以到我们的博客下面评论鸭~</p>
          <p class="p1">地址是这个 ↓</p>
          <p class="p1 url">https://www.cnblogs.com/Allforward/p/12936115.html</p>
          <p class="p1">当然，请礼貌用语哟~不然队长大人会气鼓鼓的。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        click() {
            this.$emit('change')
        }
    }
};
</script>
