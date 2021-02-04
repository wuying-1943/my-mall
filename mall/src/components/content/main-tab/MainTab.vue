<template>
   <tab-bar>
      <tab-item :path="'/home'">
        <img src="../../../assets/img/home.png" slot="item-icon">
         <img src="../../../assets/img/home-active.png" slot="item-icon-active">
        <p slot="item-text" activeColor='blue'>首页</p>
      </tab-item>
      <tab-item :path="'/category'">
        <img src="../../../assets/img/category.png" slot="item-icon">
        <img src="../../../assets/img/category-active.png" slot="item-icon-active">
        <p slot="item-text" activeColor='blue'>分类</p>
      </tab-item>
      <tab-item :path="'/cart'">
        <img src="../../../assets/img/cart.png" slot="item-icon">
        <img src="../../../assets/img/cart-active.png" slot="item-icon-active">
        <p slot="item-text" activeColor='blue'>购物车</p>
      </tab-item>
      <tab-item :path="'/my'">
        <img src="../../../assets/img/my.png" slot="item-icon">
        <img src="../../../assets/img/my-active.png" slot="item-icon-active">
        <p slot="item-text" activeColor='blue'>个人</p>
      </tab-item>
    </tab-bar>
</template>

<script>
import TabBar from './../../common/TabBar/TabBar'
import TabItem from './../../common/TabBar/TabItem'
export default {
  name:'MainTab',
  components:{
    TabBar,
    TabItem
  }  
}
</script>
