import Request from './request'

/*
 * @Description: 获取一个请求实例
 * @params {baseUrl,timeout,interceptors}
 * @return AxiosInstance
*/
function getRequestInstance(baseURL,timeout = 3000,interceptors){
 return new Request({
  baseURL,
  timeout,
  interceptors
 }) 
}

export default getRequestInstance
