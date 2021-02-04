<template>
  <div id="app">
    <MainTab></MainTab>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTab from './components/content/main-tab/MainTab'
export default {
  name: 'App',
  components:{
    MainTab,
  }
}
</script>
<style lang="scss">
@import './assets/css/base.css';
</style>
