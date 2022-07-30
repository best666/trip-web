<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCityStore } from '@/stores/modules/city'
import { storeToRefs } from 'pinia'

const seachValue = ref('')

const cityStore = useCityStore()
const { allCity } = storeToRefs(cityStore)
console.log('%c [ allCity ]-11', 'font-size:13px; background:pink; color:#bf2c9f;', allCity)
cityStore.fetchAllCity()

const router = useRouter()
const onSearch = () => {}
const onCancel = () => {
  router.back()
}
</script>

<template>
  <div class="city">
    <van-search
      v-model="seachValue"
      show-action
      shape="round"
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
  </div>
</template>

<style lang="less" scoped></style>
