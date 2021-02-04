<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">推荐首页</div>
    </nav-bar>
    <my-swiper :banners="banners"></my-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <tab-control :titles="titles"></tab-control>
    <goods-list></goods-list>
  </div>
</template>

<script>
import myRequest from "./../../network/api";
import NavBar from "../../components/common/navbar/NavBar";
import MySwiper from "../../components/content/swiper/MySwiper";
import HomeRecommend from "../../views/home/HomeRecommend";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList.vue";
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
      banners: [],
      recommends: [],
      pops: {},
      news: {},
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
    this.getBanners();
    this.getGoods();
  },
  methods: {
    getBanners() {
      myRequest("http://123.207.32.32:8000/home/multidata")
        .then((res) => {
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getGoods() {
      myRequest(
        "http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1612443743437&summary=61a1c82b4d353892a708072a8a9dca23&platform_code=H5"
      ).then((res) => {
        console.log(res.data.lists);
        this.pops = res.data.lists[0];
        this.news = res.data.lists[0];
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
ul {
  li {
    list-style: none;
    line-height: 80px;
  }
}
</style>
