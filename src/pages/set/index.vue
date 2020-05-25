<template>
  <div class="set">
    <mp-modal
      ref="mpModal"
      title="修改名称"
      content="<h1>asdsa</h1>"
      :showCancel="true"
      @confirm="confirm"
      @cancel="cancel"
    />
    <!-- 用户信息 -->
    <div class="userInfo">
      <div class="icon">
        <div class="share btn" @click="share"></div>
        <div class="avatar-box btn">
          <img class="avatar" :src="avatarUrl" alt />
        </div>
        <div class="edit btn" @click="edit"></div>
      </div>
      <div class="nickName">{{nickName}}</div>
      <div class="set-box">设置功能暂定</div>
    </div>
    <!-- 若未登录，显示登录按键，若已登录，显示具体设置 -->
    <div class="footer">
      <div v-if="!isLogged" class="login-button">
        <myButton :color="'yellow'" open-type="getUserInfo" @getuserinfo="handleClick">登录</myButton>
        <mp-button
          btnClass="btn-class"
          type="default"
          size="large"
          open-type="getUserInfo"
          @getuserinfo="handleClick"
        >登陆</mp-button>
      </div>
    </div>
    <div class="about">
      <p>关于作者</p>
    </div>
  </div>
</template>

<script>
// Use Vuex
import store from "./store";
import mpButton from "mpvue-weui/src/button";
import mpModal from "mpvue-weui/src/modal";
import myButton from "../../components/myButton";

export default {
  name: "SetPage",
  components: {
    mpButton,
    mpModal,
    myButton
  },
  data() {
    return {
      isLogged: false,
      isLoading: false
    };
  },
  computed: {
    nickName() {
      return this.$store.state.userInfo.nickName;
    },
    avatarUrl() {
      return this.$store.state.userInfo.avatarUrl;
    }
  },
  methods: {
    async handleClick({ target }) {
      try {
        this.isLoading = true;

        const { nickName, avatarUrl } = target.userInfo;

        // store.dispatch("Login", this.user);  // 页面的store
        this.$store.dispatch("Login", { nickName, avatarUrl }); // 全局store

        this.isLogged = true;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
    share() {
      console.log("点击分享");
    },
    edit() {
      console.log("点击编辑");
      this.$refs.mpModal.show();
    },
    test(e) {
      console.log("hello");
    }
  }
};
</script>

<style lang="scss" scoped>
.userInfo {
  background-color: #fffbe8;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 27px auto;
  margin-top: 100px;
  width: 80%;
  max-width: 500px;
  height: 13em;
  border-radius: 20px;
  .icon {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 70px;
    box-sizing: border-box;

    .btn {
      width: 30%;
    }
    .share {
      background: url(../../../static/images/share.png) no-repeat center;
      background-size: 1em auto;
    }
    .edit {
      background: url(../../../static/images/edit.png) no-repeat center;
      background-size: 1em auto;
    }
    .avatar-box {
      position: relative;
      .avatar {
        position: absolute;
        left: -13%;
        top: -100%;
        border-radius: 100%;
        width: 120px;
        height: 120px;
      }
    }
    .set-box {
      text-align: center;
    }
  }

  .nickName {
    margin-top: 10px;
  }
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../../../static/images/fish1.png) no-repeat center;
  background-size: 110pt auto;
  font-size: 14pt;
  height: 101pt;
  padding-top: 10px;
  color: #ffd600;
}

.btn-class {
  background-color: #fff4f0;
}
</style>
