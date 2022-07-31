<script setup>
import { useCityStore } from '@/stores/modules/city'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

const indexList = computed(() => {
  const groups = props.groupData.cities.map((item) => item.group)
  groups.unshift('#')
  return groups
})

const cityStore = useCityStore()
const router = useRouter()
const cityItemClick = (city) => {
  cityStore.currentCity = city
  router.back()
}
</script>

<template>
  <div class="city-group">
    <van-index-bar highlight-color="#ff9854" :index-list="indexList">
      <!-- 热门城市 -->
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="city in groupData.hotCities" :key="city.cityId">
          <div class="city" @click="cityItemClick(city)">{{ city.cityName }}</div>
        </template>
      </div>

      <!-- 选择城市 -->
      <template v-for="item in groupData.cities" :key="item.group">
        <van-index-anchor />
        <template v-for="city in item.cities" :key="city.cityId">
          <van-cell :title="city.cityName" @click="cityItemClick(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 16px;
  .city {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    background-color: #fff4ec;
    margin: 6px 0;
  }
}
</style>
