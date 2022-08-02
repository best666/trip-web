<script setup>
import { useCityStore } from '@/stores/modules/city'
import { useHomeStore } from '@/stores/modules/home.js'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()
// 城市数据
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
// 热门建议
const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)
</script>

<template>
  <div class="search">
    <!-- search-input -->
    <div class="section search-input bottom-gray-line">
      <div class="left" @click="cityItemClick">{{ currentCity.cityName }}</div>
      <div class="right" @click="doPosition">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
    <!-- 日期范围 -->
    <div class="section date-range bottom-gray-line">
      <div class="start">
        <span class="tip">入住</span>
        <span class="time">xxx</span>
      </div>
      <span class="stay">共一晚</span>
      <div class="start end">
        <span class="tip">离店</span>
        <span class="time">xxx </span>
      </div>
    </div>
    <!-- 价格/人数选择 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section price-counter bottom-gray-line">关键字/位置/民宿名</div>
    <!-- 热门建议 -->
    <div class="section hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div
          class="item"
          :style="{ background: item.tagText.background, color: item.tagText.color }"
        >
          <span>{{ item.tagText.text }}</span>
        </div>
      </template>
    </div>
    <!-- 搜索按钮 -->
    <div class="section"></div>
  </div>
</template>

<style lang="less" scoped>
.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;
}
.search-input {
  justify-content: space-between;
  align-items: center;
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
.date-range {
  .start {
    flex: 1;
    display: flex;
    flex-direction: column;
    .tip {
      font-size: 12px;
      color: #999;
    }
    .time {
      font-size: 15px;
      color: #666;
      font-weight: 600;
    }
  }
  .end {
    flex: 1;
    padding-left: 20px;
  }
  .stay {
    min-width: 30%;
    font-size: 12px;
    color: #666;
    line-height: 44px;
  }
}
.price-counter {
  line-height: 44px;
  .start {
    flex: 1;
    border-right: 1px solid var(--line-color);
  }
  .end {
    padding-left: 20px;
    min-width: 30%;
  }
}
.hot-suggests {
  .item {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1;
  }
}
</style>
