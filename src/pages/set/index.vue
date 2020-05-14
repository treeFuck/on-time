<template>
  <div class="set">
    <!-- 用户信息 -->
    <div class="userInfo">
      <img class="avatar" :src="user.avatarUrl" alt="">
      <div class="nickName">{{user.nickName}}</div>
    </div>
    <!-- 若未登录，显示登录按键，若已登录，显示具体设置 -->
    <div class="footer">
      <div v-if="!isLogged" class="login-button">
        <mp-button type="default" size="large" open-type="getUserInfo" @getuserinfo="handleClick">登陆</mp-button>
      </div>
      <div v-else class="set-box">
        
      </div>
    </div>
  </div>
</template>

<script>
// Use Vuex
import store from './store'
import mpButton from 'mpvue-weui/src/button'

export default {
  name: 'SetPage',
  components: {
    mpButton
  },
  data() {
    return {
      isLogged: false,
      isLoading: false,
      user: {
        nickName: '用户名',
        avatarUrl: '../../static/images/profile.jpg',
      }
    }
  },
  computed: {
  },
  methods: {
    handleClick({target}) {
      this.isLoading = true
      const { nickName, avatarUrl } = target.userInfo
      this.user.nickName = nickName
      this.user.avatarUrl = avatarUrl
      store.dispatch('Login', this.user)
      this.isLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .userInfo {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 20px;
    height: 80vh;
    .avatar {
      border-radius: 100%;
      width: 120px;
      height: 120px;
    }
    .nickName {
      margin-top: 10px;
    }
  }
  
  .loginBtn {
    width: 80%;
    border-radius: 10px;
    padding: 10px 20px;
  }
</style>
