<script setup>
import { useCityStore } from '@/stores/modules/city'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)
const cityItemClick = () => {
  router.push('/city')
}
const doPosition = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (res) => {
        console.log('[ res ] >', res)
      },
      (err) => {
        console.log('[ err ] >', err)
      }
    )
  } else {
    console.log('浏览器不支持获取地理位置。')
  }
}
</script>

<template>
  <div class="search">
    <!-- search-input -->
    <div class="search-input">
      <div class="left" @click="cityItemClick">{{ currentCity.cityName }}</div>
      <div class="right" @click="doPosition">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  padding: 0 20px;
  color: #333;

  .left {
    flex: 1;
  }

  .right {
    display: flex;
    align-items: center;
    width: 78px;

    span {
      font-size: 12px;
      color: #666;
    }

    img {
      width: 20px;
      margin-left: 8px;
    }
  }
}
</style>
