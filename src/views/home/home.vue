<script setup>
import HomeSearch from './cpns/home-search.vue'
</script>

<template>
  <div class="home">
    <van-nav-bar title="旅途" />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <!-- s搜索 -->
    <home-search />
  </div>
</template>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
</style>
