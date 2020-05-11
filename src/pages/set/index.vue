<template>
  <div class="set">
    <!-- 用户信息 -->
    <div class="userInfo">
      <div class="avatar">
        <img :src="user.avatarUrl" alt="">
      </div>
      <div class="nickName">{{user.nickName}}</div>
    </div>
    <!-- 若未登录，显示登录按键，若已登录，显示具体设置 -->
    <div class="footer">
      <div v-if="!isLogged" class="login-button">
        <mp-button @click="handleClick">登陆</mp-button>
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
    handleClick() {
      console.log('hello');
    }
  }
}
</script>

<style scoped>
  .userInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
  }
  .avatar {
    width: 100px;
    height: 100px;
  }
  .loginBtn {
    width: 80%;
    border-radius: 10px;
    padding: 10px 20px;
  }
</style>
