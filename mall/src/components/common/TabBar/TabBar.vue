<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'TabBar'
}
</script>

<style lang="scss" scoped>
  .tab-bar{
    width: 100%;
    height: 45px;
    background: #333;
    position: fixed;
    left: 0;
    bottom: 0;
    box-shadow: 0px -1px 1px #ddd;
    display: flex;
  }
</style>