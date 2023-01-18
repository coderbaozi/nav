import axios from 'axios'

class Request {
  /*
   * 构造函数
   * @param {config} object {baseURL,[timeout],[interceptors]}
   */
  constructor(config) {
    this.instance = axios.create(config)

    // 全局请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      },
    )

    // 全局响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        // 解构Axios封装的reponse
        return res.data
      },
      (err) => {
        return err
      },
    )

    // 针对特定的实例添加拦截器 名称固定
    this.instance.interceptors.request.use(config.interceptors?.requestSuccessFn, config.interceptors?.requestFilureFn)

    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFilureFn,
    )
  }

  /*
   * 封装网络请求的方法，可增加单次请求拦截器
   * @param {config} object  请求config
   * config
   */
  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then((res) => {
        // 单次成功响应拦截
        if (config.interceptors?.responseSuccessFn) {
          res = config.interceptors.responseSuccessFn(res)
        }
        resolve(res)
      })
    }).catch((err) => {
      reject(err)
    })
  }

  get(config) {
    return this.request({ ...config, methods: 'GET' })
  }

  post(config) {
    return this.request({ ...config, methods: 'POST' })
  }
}

export default Request
