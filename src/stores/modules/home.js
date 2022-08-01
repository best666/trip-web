import { getHotSuggests } from '@/services/modules/home'
import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: []
  }),
  actions: {
    async fetchHotSuggests() {
      const res = await getHotSuggests()
      this.hotSuggests = res.data
    }
  }
})
