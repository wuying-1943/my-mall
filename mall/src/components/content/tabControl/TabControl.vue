<template>
  <div class="tab-control">
    <div
      class="control-item"
      :class="{ active: currentIndex === index }"
      v-for="(item, index) in titles"
      :key="index"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('controlItemClick',index)
    },
  },
};
</script>

<style lang="scss" scoped>
.tab-control {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #fff;
  display: flex;
  position: sticky;
  top: 43px;
  z-index: 99;
  .control-item {
    flex: 1;
    text-align: center;
    span {
      font-size: 16px;
      color: #444;
      padding: 5px 0;
      border-bottom: 2px solid transparent;
    }
  }
  .active {
    span {
      color: palevioletred;
      border-color: palevioletred;
    }
  }
}
</style>