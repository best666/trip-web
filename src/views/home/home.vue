<script setup>
import { useHomeStore } from '@/stores/modules/home'
import HomeSearch from './cpns/home-search.vue'

// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggests()
</script>

<template>
  <div class="home">
    <van-nav-bar title="best旅途" />
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
