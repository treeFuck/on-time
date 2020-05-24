<template>
  <div class="teamCard" :class="state == 'create' ? 'createColor1' : 'editColor1'">
    <div class="title" :class="state == 'create' ? 'createColor2' : 'editColor2'">
      <p v-if="state === 'create'">新建队伍</p>
      <p v-else>管理队伍</p>
    </div>
    <div class="main">
      <div class="left">
        <div class="input-box">
          <label for="teamName">编辑队名 :</label>
          <input v-model="teamName" type="text" name="teamName" />
        </div>
        <div class="input-box">
          <label for="limit">队员上限 :</label>
          <input v-model="limit" type="text" name="limit" />
        </div>
        <div class="input-box">
          <label for="invite">成员列表 :</label>
          <input type="text" name="invite" value="邀请成员" disabled @click="invite" />
        </div>
      </div>
      <div class="right">
        <p>队长</p>
        <img src="../user.png" alt />
      </div>
    </div>
    <div class="avatarList">
      <img src="../user.png" alt />
      <img src="../user.png" alt />
      <img src="../user.png" alt />
      <img src="../user.png" alt />
      <img src="../user.png" alt />
      <img src="../user.png" alt />
    </div>
    <div v-if="state === 'create'" class="btn-box">
      <my-button @click="createTeam" :color="'red'">完成</my-button>
    </div>
    <div v-else class="btn-box">
      <my-button @click="deleteTeam" :color="'yellow'">删除</my-button>
      <my-button @click="editTeam" :color="'yellow'">完成</my-button>
    </div>
  </div>
</template>

<script>
import myButton from '../../../components/myButton'
export default {
  name: 'TeamCard',
  components: {
    myButton
  },
  props: {
    state: String
  },
  data() {
    return {
      teamName: "",
      limit: 0,
      member: []
    };
  },
  methods: {
    invite() {
      console.log("点击邀请");
    },
    createTeam() {
      console.log("创建按钮");
    },
    deleteTeam() {
      console.log("删除按键");
    },
    editTeam() {
      console.log("编辑按键");
    }
  },
  created() {
    console.log(this._props.state);
  }
};
</script>

<style lang="scss" scoped>
.createColor1 {
  color: #ff8a77;
  background-color: #fff4f0
}
.editColor1 {
  color: #FFD600;
  background-color: #FFFBE8
}
.createColor2 {
  color: #ff8a77;
  background-color: #ffdcd4;
}
.editColor2 {
  background-color: #FFF4BB;
  color: #FFD600;
}
.teamCard {
  border-radius: 5pt;
  margin: 20px;
  .title {
    display: flex;
    justify-content: center;
    font-size: 20pt;
    height: 20pt;
    border-radius: 5pt 5pt 0 0;
    position: relative;
    p {
      position: absolute;
      top: -80%;
    }
  }
  .main {
    display: flex;
    padding-top: 1em;
    .left {
      width: 80%;
      .input-box {
        display: flex;
        justify-content: space-around;
        align-items: center;
        label {
          font-size: 13pt;
        }
        input {
          border-radius: 10px;
          text-align: center;
          width: 50%;
          background-color: #ffffff;
        }
      }
    }
    .right {
      padding-left: 10px;
      p {
        text-align: center;
      }
      img {
        width: 36pt;
        height: 36pt;
        border-radius: 100%;
      }
    }
  }
  .avatarList {
    padding-top: 1em;
    display: flex;
    justify-content: space-around;
    img {
      width: 24pt;
      height: 24pt;
      border-radius: 100%;
    }
  }
  .btn-box {
    padding-top: 1em;
    display: flex;
    justify-content: center;
  }
}
</style>