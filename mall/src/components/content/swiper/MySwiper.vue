<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="item in banners" :key="item.acm">
      <img :src="item.image" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
  export default {
    name: 'MySwiper',
    props:{
      banners:{
        type:Array,
        default:()=>[]
      }
    },
    data() {
      return {
        swiperOptions: {
          autoplay:true,
          loop:true,
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    mounted() {
    }
  }
</script>
<style lang="scss" scoped>
  img{
    vertical-align: bottom;
    width: 100%;
  }
</style>