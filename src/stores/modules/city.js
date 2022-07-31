import { defineStore } from 'pinia'
import { getCityAll } from '@/services/modules/city'

export const useCityStore = defineStore('city', {
  state: () => ({
    allCity: {},
    currentCity: { cityName: '广州' }
  }),
  getters: {},
  actions: {
    async fetchAllCity() {
      const res = await getCityAll()
      this.allCity = res.data
    }
  }
})
