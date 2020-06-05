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
  <div class="about">
    <div class="con">
      <div class="top" @click="change">
        <div class="left"></div>
        <div class="fish">
          <span>{{typeStr}}</span>
        </div>
        <div class="right"></div>
      </div>
      <div class="dataCon">
        <div v-show="type == 'use'">
          <img src="../../../static/images/we1.png" />
          <div class="text">
            <div class="item1">
              <span class="title1">一、个人计划功能：</span>
              <p class="p1">工作、学习乃至日常生活上的安排，您都可以根据实际情况通过个人计划功能悉数记下，并随时进行修改，达到备忘录式查看的目的。</p>
            </div>
            <div class="item1">
              <span class="title1">二、团队计划功能：</span>
              <p class="p1">在涉及团队成员合作的场景下，您可以创建属于你的团队，并邀请您的成员共同管理查看详细任务列表，以便于互相监督任务进展</p>
            </div>
            <div class="item1">
              <span class="title1">三、日程表功能：</span>
              <p
                class="p1"
              >日期选择便捷查看——点击页面右上方的鱼钩拉下日期选择栏后可以进行日期选择，并可以根据个人喜好对任务的完成顺序进行定义，每天尚未完成的全部个人/团队任务将会在日程表中一览无余的展示出来————我们为您准备了四种排序方法：</p>
              <div class="item2">
                <span class="title2">三种由程序为您规划时间的排序：</span>
                <p class="p2">1、短任务优先：所有待完成的任务将会以您输入的任务预估耗时由短到长进行排序，当多个任务耗时相同时，将会再次以截止时间的早晚进行排序。</p>
                <p class="p2">2、长任务优先：类比于短任务优先的逻辑，在本选择中，您的任务将会首先以从耗时长到耗时短的顺序进行排序。</p>
                <p
                  class="p2"
                >3、紧急任务优先：看到编辑计划面板处最下方分别为“绿、黄、橙、红”四种颜色的按钮了吗，它们依次分别代表着紧急程度由低到高哦，您可以动动手指为您的每一个任务添加紧急度，这样就可以通过本排序算法实现紧急度高的任务优先完成呢。当您不点击按钮时，任务的优先级默认是最低的绿色哦！</p>
              </div>
              <div class="item2">
                <span class="title2">温馨提示：</span>
                <p
                  class="p2"
                >在上述三种排序方法中，您会发现对于每种排序方式，任务的起止时间、截止时间、和紧急程度等都有几项不是必须的，具体要看您选择哪种排序方法，您才要完善对应参数的信息啦！</p>
                <p class="p2">在以上三种排序中，我们在每个相邻的任务之间为您提供了些许休息时间，劳逸结合才能事半功倍哦！</p>
                <p class="p2">如果您不喜欢上面的排序方式，那么也可以试试下面的由您自己定义任务起止时间的排序呢！</p>
              </div>
              <div class="item2">
                <span class="title2">一种完全由您自由规划时间的排序：</span>
                <p
                  class="p2"
                >起止时间排序：这种排序是为了习惯于完全由自己掌控时间安排的用户设计的呢！一旦您打算选择这个排序方式，作者要提醒您的是：务必要根据您的需求来完善每个任务的开始时间、预估耗时以及截止时间！因为，在这种排序下，程序完全是根据您的意愿对一天的任务进行从早到晚的展示呢！</p>
              </div>
              <p class="p1">在完成排序和查看后，切记您需要在一天结束时将当天所有已完成的任务进行完成状态的标记，具体方法是：点击任务后，出现闹钟图标即可。</p>
              <p class="p1">在您重新进入日程表模块后，已完成的任务将隐藏显示并对其他未完成的任务进行重新排序，这可能造成与实际时间不符的结果。所以请您不要每完成一个任务就沾沾自喜地去消除哦，还是抓紧时间休息，然后立刻去进行下一个任务吧~（如果不小心‘完成’了某项任务，您仍可以在计划功能页面找到并恢复已经被标记的它。）</p>
            </div>
            <div class="item1">
              <span class="title1">四、设置功能：</span>
              <p class="p1">在本模块中，您可以找到关于作者团队的信息，当然还有您正在阅读的使用说明啦！</p>
            </div>
            <div class="item1">
              <span class="title1">五、其他说明：</span>
              <p class="p1">如果还有不清晰的地方，可以在摸索着使用的同时再来查看使用说明哦~</p>
            </div>
          </div>
        </div>
        <div v-show="type == 'author'">
          <img src="../../../static/images/we2.png" />
          <div class="text">
            <div class="item1">
              <span class="title1">一级标题</span>
              <p class="p1">一级文本</p>
              <div class="item2">
                <span class="title2">二级标题</span>
                <p class="p2">1、二级文本</p>
                <p class="p2">2、二级文本</p>
                <p class="p2">3、二级文本</p>
              </div>
            </div>
            <p></p>
            <p></p>
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


