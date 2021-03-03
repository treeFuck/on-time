<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
}
.login {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .top {
    position: relative;
    height: 40vh;
    background-color: #fff;
    text-align: center;
    .data {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        height: 20vh;
        width: 35vh;
      }
      div {
        width: 100vw;
        color: #ffeb85;
        font-size: 23px;
        text-align: center;
        line-height: 1.2em;
        font-weight: bold;
      }
    }
  }
  .bottom {
    height: 60vh;
    background-color: #ffeb85;
    .triangle {
      width: 0;
      height: 0;
      border-right: 50vw solid #fff;
      border-left: 50vw solid #fff;
      border-bottom: 20vh solid #ffeb85;
    }
    .square {
      height: 40vh;
      background-color: #ffeb85;
      .btnCon {
        position: relative;
        margin: 0 auto;
        width: 7em;
        height: 4.5em;
        img {
          width: 100%;
          height: 100%;
        }
        button {
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }
      }
    }
  }
}
</style>

<template>
  <div class="login">
    <div class="top">
      <div class="data">
        <img src="../../../static/images/login_bg.png" />
        <div>规划你的咸鱼人生。</div>
      </div>
    </div>
    <div class="bottom">
      <div class="triangle"></div>
      <div class="square">
        <div class="btnCon">
          <img src="../../../static/images/login_btn.png" />
          <button open-type="getUserInfo" @getuserinfo="handleClick"></button>
        </div>
      </div>
      <mp-loading :showLoading="isShowLoading" loadingText="登录中..." mask="true"></mp-loading>
    </div>
  </div>
</template>

<script>
import mpLoading from "mpvue-weui/src/loading";
export default {
  components: {
    mpLoading
  },
  data() {
    return {
      isShowLoading: false,
    };
  },
  methods: {
    async handleClick({ target }) {
      this.isShowLoading = true;
      try {
        const { nickName, avatarUrl } = target.userInfo;
        const res = await this.$store.dispatch("Login", {
          nickName,
          avatarUrl
        });
        this.isShowLoading = false;
        if (res == "success") {
          console.log("登录成功");

          // 如果是通过分享链接进来的，则其链接上应该携带着被分享的团队ID
          const groupId = this.$root.$mp.query.groupId || 0
          const groupName = this.$root.$mp.query.groupName || '闲鱼特工队'
          if(groupId !== 0) {
            await this.$store.dispatch('setSharedGroup', { groupId, groupName })
            await wx.switchTab({
              url: `/pages/team/main`
            })
          }
          // 正常访问
          else {
            wx.switchTab({
            url: "/pages/schedule/main"
            // url: "/pages/Individual/main",
            // url: "/pages/set/main",
            // url: "/pages/team/main",
            // url: "/pages/about/main"
          });
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    
  }
};
</script>
