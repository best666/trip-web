<script setup>
import { useCityStore } from '@/stores/modules/city'
import { useHomeStore } from '@/stores/modules/home.js'
import { useMainStore } from '@/stores/modules/main.js'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { formatMonthDay, getDiffDays } from '@/utils/format_date'

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
// 日期范围的处理
const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)

const startDateStr = computed(() => formatMonthDay(startDate.value))
const endDateStr = computed(() => formatMonthDay(endDate.value))
const stayCount = ref(getDiffDays(startDate.value, endDate.value))

const showCalendar = ref(false)
const onConfirm = (value) => {
  // 1.设置日期
  const selectStartDate = value[0]
  const selectEndDate = value[1]
  mainStore.startDate = selectStartDate
  mainStore.endDate = selectEndDate
  stayCount.value = getDiffDays(selectStartDate, selectEndDate)

  // 2.隐藏日历
  showCalendar.value = false
}
// 热门建议
const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)
// 搜索
// 开始搜索
const searchBtnClick = () => {
  router.push({
    path: '/search',
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: currentCity.value.cityName
    }
  })
}
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
    <div class="section date-range bottom-gray-line" @click="showCalendar = true">
      <div class="start">
        <span class="tip">入住</span>
        <span class="time">{{ startDateStr }}</span>
      </div>
      <span class="stay">共{{ stayCount }}晚</span>
      <div class="start end">
        <span class="tip">离店</span>
        <span class="time">{{ endDateStr }}</span>
      </div>
    </div>
    <van-calendar
      v-model:show="showCalendar"
      type="range"
      color="#ff9854"
      :round="false"
      :show-confirm="false"
      @confirm="onConfirm"
    />
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
    <div class="section search-btn">
      <div class="btn" @click="searchBtnClick">开始搜索</div>
    </div>
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
      margin-top: 3px;
      font-size: 15px;
      color: #333;
      font-weight: 500;
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
  margin: 10px 0;
  height: auto;

  .item {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1;
  }
}
.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
  }
}
</style>
