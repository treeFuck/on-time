<template>
  <div class="set">
    <!-- 用户信息 -->
    <div class="userInfo">
      <div class="icon">
        <div class="share btn" @click="share"></div>
        <div class="avatar-box btn">
          <img class="avatar" :src="user.avatarUrl" alt />
        </div>
        <div class="edit btn" @click="edit"></div>
      </div>
      <div class="nickName">{{user.nickName}}</div>
    </div>
    <!-- 若未登录，显示登录按键，若已登录，显示具体设置 -->
    <div class="footer">
      <div v-if="!isLogged" class="login-button">
        <mp-button type="default" size="large" open-type="getUserInfo" @getuserinfo="handleClick">登陆</mp-button>
      </div>
      <div v-else class="set-box">功能暂定</div>
    </div>
  </div>
</template>

<script>
// Use Vuex
import store from "./store";
import mpButton from "mpvue-weui/src/button";

export default {
  name: "SetPage",
  components: {
    mpButton
  },
  data() {
    return {
      isLogged: false,
      isLoading: false,
      user: {
        nickName: "用户名",
        avatarUrl: "../../static/images/avatar.png"
      }
    };
  },
  computed: {},
  methods: {
    handleClick({ target }) {
      this.isLoading = true;
      const { nickName, avatarUrl } = target.userInfo;
      this.user.nickName = nickName;
      this.user.avatarUrl = avatarUrl;
      store.dispatch("Login", this.user);
      this.isLoading = false;
    },
    share() {
      console.log("点击分享");
    },
    edit() {
      console.log('点击编辑');
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
      background: url(../../../static/images/share.png) no-repeat center;
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
  }

  .nickName {
    margin-top: 10px;
  }
}

.loginBtn {
  margin-top: 50vh;
  width: 80%;
  border-radius: 10px;
  padding: 10px 20px;
}
</style>
