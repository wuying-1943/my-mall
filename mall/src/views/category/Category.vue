<template>
<div class="wrapper">
    <div class="category">
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
  </div>
</div>

</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Category",
  created() {
    
  },
  mounted() {
    this.$nextTick(() => {
      console.log('加载完成')
      this.scroll = new BScroll('.wrapper',{
        probeType:3,
        pullUpLoad:true
      });
      this.scroll.on('scroll',(pos)=>{
        // console.log(pos.y)
      });
      this.scroll.on('pullingUp',(res)=>{
        console.log('上拉加载更多')
      })
    })
  },
};
</script>

<style lang="scss" scoped>
.wrapper{
height: 450px;
border: 1px solid red;
}
.category {
  
  p {
    line-height: 100px;
  }
}
</style>
