import axios from 'axios'
import message from '@/utils/Message'
import tLoading from '@/utils/Loading'
const CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded;charset=UTF-8'
const CONTENT_TYPE_JSON = 'application/json'
const CONTENT_TYPE_FILE = 'multipart/form-data'

const request = (config) => {
  let { url, params, dataType = 'form', showLoading = 'true', method = 'get' } = config
  let contentType = CONTENT_TYPE_FORM
  if (dataType === 'json') {
    contentType = CONTENT_TYPE_JSON
  } else if (dataType === 'file') {
    contentType = CONTENT_TYPE_FILE
    let param = new FromData()
    for (let key in params) {
      param.append(key, params[key])
    }
    params = param
  }

  const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10 * 1000,
    headers: {
      'Content-Type': contentType,
      'X-Requested-With': 'XMLHttpRequest',
    },
  })
  let loading = null
  // 请求前拦截
  instance.interceptors.request.use(
    (config) => {
      if (showLoading) {
        loading = tLoading.start()
      }
      return config
    },
    (error) => {
      if (showLoading && loading) {
        loading.hide()
      }
      message.error('发送请求失败')
      return Promise.reject('发送请求失败')
    },
  )
  //请求后拦截
  instance.interceptors.response.use(
    (response) => {
      if (showLoading) {
        loading.hide()
      }
      const responseData = response.data
      if (responseData.status == 'error') {
        if (config.errorCallback) {
          config.errorCallback()
        }
        return Promise.reject(responseData.info)
      } else {
        if (responseData.code == 200) {
          return responseData
        } else if (responseData.code == 901) {
          return Promise.reject('登录超时')
        }
      }
    },
    (error) => {
      console.log(error)
      if (showLoading) {
        loading.hide()
      }
      return Promise.reject('网络异常')
    },
  )
  if (method == 'post') {
    return instance.post(url, params).catch((error) => {
      message.error(error)
      return null
    })
  }
  return instance.get(url, params).catch((error) => {
    message.error(error)
    return null
  })
}

export default request
