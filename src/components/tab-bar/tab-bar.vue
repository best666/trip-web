<script setup>
import { computed, ref } from 'vue'
import tabbarData from '@/assets/data/tabbar.js'
import { getAssetURL } from '@/utils/load_assets.js'
import { useRoute } from 'vue-router'

const currentIndex = ref(0)

const route = useRoute()
const isHide = computed(() => route.meta.hideTabBar)
</script>

<template>
  <div class="tab-bar" v-if="!isHide">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData" :key="item.text">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="" />
            <img v-else :src="getAssetURL(item.imageActive)" alt="" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<style lang="less" scoped></style>
