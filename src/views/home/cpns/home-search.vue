<script setup>
import { ref } from 'vue';

let show = ref(false)
const formatter = (day) => {
  const date = day.date.getDate();

  if (date === 11)
  {
    day.text = '今天';
  }


  if (day.type === 'start')
  {
    day.bottomInfo = '入住';
  } else if (day.type === 'end')
  {
    day.bottomInfo = '离店';
  }

  return day;
};
</script>

<template>
  <div class="search">
    <!-- search-input -->
    <div class="search-input">
      <span class="left">广州</span>
      <div class="right">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
    <!-- Date of stay -->
    <div class="data-stay">
      <van-calendar v-model:show="show" type="range" :formatter="formatter" />
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

  .right {
    display: flex;
    align-items: center;

    span {
      font-size: 14px;
      color: #666;
    }

    img {
      width: 20px;
      margin-left: 8px;
    }
  }
}
</style>
