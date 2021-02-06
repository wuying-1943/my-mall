<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">推荐首页</div>
    </nav-bar>
    <div class="wrapper">
      <div class="content">
        <my-swiper :banners="banners"></my-swiper>
        <home-recommend :recommends="recommends"></home-recommend>
        <tab-control
          :titles="titles"
          @controlItemClick="controlItemHandle"
        ></tab-control>
        <goods-list :goods="goodsList[currentIndex]"></goods-list>
      </div>
    </div>
  </div>
</template>

<script>
import myRequest from "./../../network/api";
import NavBar from "../../components/common/navbar/NavBar";
import MySwiper from "../../components/content/swiper/MySwiper";
import HomeRecommend from "../../views/home/HomeRecommend";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import BScroll from "better-scroll";

export default {
  name: "Home",
  components: {
    NavBar,
    MySwiper,
    HomeRecommend,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      scroll: null,
      banners: [],
      recommends: [],
      goodsList: [],
      currentIndex: 0,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
      titles: ["流行", "新款", "精选"],
    };
  },
  created() {
    this.getHomeDatas();
  },
  mounted() {},
  methods: {
    getHomeDatas() {
      let p1 = myRequest("http://123.207.32.32:8000/home/multidata");
      let p2 = myRequest(
        "http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1612443743437&summary=61a1c82b4d353892a708072a8a9dca23&platform_code=H5"
      );
      Promise.all([p1, p2])
        .then(([res1, res2]) => {
          this.banners = res1.data.data.banner.list;
          this.recommends = res1.data.data.recommend.list;
          this.goodsList = res2.data.lists;
          this.$nextTick(() => {
            this.scroll = new BScroll(".wrapper");
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    controlItemHandle(e) {
      this.currentIndex = e;
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  padding-top: 44px;
  padding-bottom: 45px;
  position: relative;
  .home-nav {
    background: palevioletred;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
  }
  .wrapper {
    width: 100%;
    background: red;
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
    overflow: hidden;
   .content{
      // padding-bottom: 125px;
   }
  }
}
ul {
  li {
    list-style: none;
    line-height: 80px;
  }
}
</style>
