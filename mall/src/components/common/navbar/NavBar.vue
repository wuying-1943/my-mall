<template>
  <div class="navbar">
    <div class="nav-left">
      <slot name="left"></slot>
    </div>
    <div class="nav-center">
      <slot name="center"></slot>
    </div>
    <div class="nav-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'NavBar'
}
</script>

<style lang="scss" scoped>
  .navbar{
    width: 100%;
    height: 44px;
    line-height: 44px;
    display: flex;
    div{
      color: #fff;
      font-size: 16px;
      text-align: center;
    }
    .nav-left{
      width: 60px;
    }
    .nav-center{
       flex-grow: 1; 
    }
    .nav-right{
      width: 60px;
    }
  }
</style>