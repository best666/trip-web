import axios from 'axios'
import { useLoadingStore } from '@/stores/modules/loading'
import { baseURL, TIMEOUT } from './config'
const loadingStore = useLoadingStore()
class MYRequest {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
      timeout: TIMEOUT
    })
  }

  request(config) {
    loadingStore.changeLoading(true)
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          console.log('request err:', err)
          reject(err)
        })
        .finally(() => {
          loadingStore.changeLoading(false)
        })
    })
  }

  get(config = {}) {
    return this.request({ ...config, method: 'get' })
  }

  post(config = {}) {
    return this.request({ ...config, method: 'post' })
  }
}

export default new MYRequest(baseURL)
