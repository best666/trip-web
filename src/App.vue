<script setup>
import { RouterView } from 'vue-router'
import TabBar from '@/components/tab-bar/tab-bar.vue'
</script>

<template>
  <div class="app">
    <router-view />
    <tab-bar />
  </div>
</template>

<style scoped></style>
