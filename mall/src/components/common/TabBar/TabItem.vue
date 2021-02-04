<template>
  <div class="tab-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{activeColor:isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabItem',
  props:{
    path:{
      type:String,
      default:'',
      required:true
    },
    activeColor:{
      type:String,
      dafault:'#f10'
    }
  },
  data() {
    return {
    }
  },
  computed:{
    isActive(){
      let res = this.path.includes(this.$route.path) ? true : false;
      return res
    },
  },
  methods: {
    itemClick(){
      if(this.$route.path.includes(this.path)){
        return
      }
      this.$router.push(this.path)
    }
  },
}
</script>

<style lang="scss" scoped>
  .tab-item{
    flex: 1;
    text-align: center;
    img{
      width: 25px;
      height: 25px;
    }
    p{
      font-size: 12px;
      color: #fff;
    }
    .activeColor{
      p{
        color: orangered;
      }

    }
  }
</style>