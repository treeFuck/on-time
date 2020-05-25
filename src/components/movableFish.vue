<style lang="scss" scoped>
    .movableFish {
        position: absolute;
        width: 5em;
        height: 5em;
        background-color: #f40;
        border-radius: 50%;
        box-shadow: 0 0 10px #eee;
    }
</style>

<template>
  <div class="movableFish" @touchstart='touchstartFun' @touchmove="touchmoveFun">
  </div>
</template>

<script>
export default {
    data() {
        return {
            startX: 0,
            startY: 0,
            windowHeight: null,
            windowWidth: null
        }
    },
    methods: {
        touchstartFun(e) {
            this.startX = e.touches[0].pageX;
            this.startY = e.touches[0].pageY;
            // console.log(e )
        },
        touchmoveFun(e) {
            console.log(e.touches[0].pageX - this.startX, e.touches[0].pageY - this.startY);
        },
        touchendFun(e) {
            console.log(e);
        }
    },
    mounted() {
        let systemInfo = wx.getSystemInfoSync();
        this.windowHeight = systemInfo.windowHeight;
        this.windowWidth = systemInfo.windowWidth;
        console.log(this.windowHeight, this.windowWidth);
    }
}
</script>
