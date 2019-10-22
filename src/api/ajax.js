import axios from 'axios'
import qs from 'qs'
import { message } from 'antd'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const instance = axios.create({
  timeout:10000
})

instance.interceptors.request.use(config => {
  NProgress.start()
  const {data} = config
  if (data instanceof Object) {
    config.data = qs.stringify(data)
  }
  return config
})

instance.interceptors.response.use(
  response => {
    NProgress.done()
    const result = response.data
    retnrn result
  },
  error => {
    NProgress.done()
    message.error('请求出错:' +error.message)
    return new Promise(() => {})
  }
)

export default instance