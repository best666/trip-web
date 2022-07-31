<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCityStore } from '@/stores/modules/city'
import { storeToRefs } from 'pinia'
import CityGroup from './cpns/city-group.vue'

const seachValue = ref('')
const tabActive = ref()

// 请求城市数据
const cityStore = useCityStore()
const { allCity } = storeToRefs(cityStore)
cityStore.fetchAllCity()

const router = useRouter()
const onSearch = () => {}
const onCancel = () => {
  router.back()
}
</script>

<template>
  <div class="city">
    <!-- 搜索框 -->
    <van-search
      v-model="seachValue"
      show-action
      shape="round"
      placeholder="城市/区域/位置"
      @search="onSearch"
      @cancel="onCancel"
    />
    <!-- tab -->
    <van-tabs v-model:active="tabActive" color="#ff9854">
      <template v-for="(value, key) in allCity" :key="key">
        <van-tab :title="value.title" :name="key"></van-tab>
      </template>
    </van-tabs>
    <!-- content -->
    <div class="content">
      <template v-for="(citys, key) in allCity" :key="key">
        <city-group v-show="tabActive === key" :group-data="citys" />
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.city {
  :deep(.van-tabs__nav) {
    z-index: 2;
  }
}
.content {
  height: calc(100vh - 98px);
  overflow-y: auto;
}
</style>
