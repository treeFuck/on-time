<template>
  <div class="set">
    <!-- <mp-loading :showLoading="isLoading" loadingText="加载中..."></mp-loading> -->
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
        <!-- <div class="share btn" @click="share"></div> -->
        <div class="avatar-box btn">
          <img class="avatar" :src="avatarUrl" alt />
        </div>
        <!-- <div class="edit btn" @click="edit"></div> -->
      </div>
      <div class="nickName">{{nickName}}</div>
      <!-- <div class="set-box">设置功能暂定</div> -->
    </div>
    <div class="author" @click="about('author')">
      <span>关于作者</span>
    </div>
    <div class="use" @click="about('use')">
      <span>使用说明</span>
    </div>
    <div class="author" @click="test">
      <span>关于作者</span>
    </div>
  </div>
</template>

<script>
// Use Vuex
import store from "./store";
import mpButton from "mpvue-weui/src/button";
import mpModal from "mpvue-weui/src/modal";
import mpLoading from 'mpvue-weui/src/loading';
import myButton from "../../components/myButton";

export default {
  name: "SetPage",
  components: {
    mpButton,
    mpModal,
    myButton,
    mpLoading
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
    share() {
      console.log("点击分享");
    },
    edit() {
      console.log("点击编辑");
      this.$refs.mpModal.show();
    },
    about(param) {
      wx.navigateTo({ url:`/pages/about/main?type=${param}`})
    },
    async test() {
      const shareGroupId = 1231
      await this.$store.dispatch('setShareGroupId', shareGroupId)
      await wx.switchTab({
        url: `/pages/team/main`
      })
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
  height: 10em;
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
        box-shadow: 0 8px 12px 0px #ffe980;
      }
    }
    .set-box {
      text-align: center;
    }
  }

  .nickName {
    font-size: 24px;
    color:#A08600;
    margin-top: 10px;
  }
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.author, .use {
  position: relative;
  margin: 1em auto;
  width: 9em;
  height: 5em;
  color: #ffd600;
  font-size: 20px;
  background-repeat: no-repeat;
  background-size: auto 100% ;
  background-position: center;
  span {
    position: absolute;
    font-weight: bold;
    line-height: 5.5em;
  }
}
.author {
  background-image: url(../../../static/images/fish1.png) ;
  span {
    left: 2em;
  }
}
.use {
  background-image: url(../../../static/images/fish4.png) ;
  span {
    right: 2em;
  }
}

.btn-class {
  background-color: #fff4f0;
}
</style>
