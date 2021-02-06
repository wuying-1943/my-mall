<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "MyScroll",
  data() {
    return {
      scroll: null,
    };
  },
  created() {

  },
  mounted() {
    setTimeout(()=>{
       console.log(this.$refs.scroll.clientHeight);
      this.scroll = new BScroll(this.$refs.scroll, {});
    },10000)
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height:calc(100vh - 45px - 45px);
  overflow: hidden;
  border: 2px solid blueviolet;
  box-sizing: border-box;
  .content {
    // height: auto;
    // height: 500px;
  }
}
</style>
