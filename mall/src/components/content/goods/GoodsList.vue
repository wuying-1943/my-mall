<template>
  <div class="goods-list">
    <div class="item" v-for="item in goods.events" :key="item.eventId">
      <img :src="item.imageUrl" alt="" />
      <div>{{ item.chineseName }}</div>
    </div>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem.vue";
export default {
  components: { GoodsItem },
  name: "GoodsList",
  props: {
    goods: {
      type: Object,
      default: () => {
        return {};
      },
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.goods-list {
  width: 100%;
  padding: 10px 5px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .item {
    width: 48%;
    margin-bottom: 10px;
    text-align: center;
    img {
      width: 100%;
      height: 200px;
      vertical-align: bottom;
      border-radius: 5px;
      object-fit: cover;
    }
    div{
      margin-top: 5px;
      font-size: 13px;
      color: palevioletred;
    }
  }
}
</style>
