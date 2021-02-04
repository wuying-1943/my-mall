<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">推荐首页</div>
    </nav-bar>
    <my-swiper :banners = 'banners'></my-swiper>
    <home-recommend :recommends = 'recommends' ></home-recommend>
  </div>
</template>

<script>
import myRequest from "./../../network/api";
import NavBar from "../../components/common/navbar/NavBar";
import MySwiper from '../../components/content/swiper/MySwiper'
import HomeRecommend from '../../views/home/HomeRecommend'
export default {
  name: "Home",
  components: {
    NavBar,
    MySwiper,
    HomeRecommend
  },
  data() {
    return {
      banners:[],
      recommends:[],
      swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        }
    };
  },
  created() {
    this.getBanners();
  },
  methods: {
    getBanners() {
      myRequest("http://123.207.32.32:8000/home/multidata")
        .then((res) => {
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  padding-top: 44px;
  .home-nav {
    background: palevioletred;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
  }
}
</style>
