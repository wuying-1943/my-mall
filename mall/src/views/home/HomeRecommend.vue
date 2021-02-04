<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props:{
    recommends:{
      type:Array,
      default:()=>[],
      required:true,
    }
  }
}
</script>

<style lang="scss" scoped>
  .recommend{
    display: flex;
    background: #fff;
    padding: 10px 0;
    margin-bottom: 10px;
    .recommend-item{
      flex: 1;
      text-align: center;
      a{
        width: 100%;
        height: 100%;
        font-size:14px;
        text-decoration: none;
        color: #333;
        img{
          width: 64px;
          height: 64px;
          vertical-align: bottom;
        }
      }
    }
  }
</style>