import axios from "axios"
import router from "../router"

const instance = axios.create({
  baseURL: `${process.env.API_BASE_URL}/api`,
})

// 请求拦截器
instance.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  function (response) {
    if (response.status == 401) {
      router.push("login")
    }
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default instance
