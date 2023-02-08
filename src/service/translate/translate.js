import getRequestInstance from '../'
import { YOUDAO_TRANSLATE_URL } from './constant'

const youdaoRequestInstance = getRequestInstance(YOUDAO_TRANSLATE_URL)

const youdaoheaders = {
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
}

/*
 * @Description: 有道词典接口
 * @Param {string} 查询词汇
 * @Return {Promise} 
*/
export async function youdaoTranslate(query){
  const postBody = {
    q:'测试',
    from:'Auto',
    to:'Auto'
  }
  return await youdaoRequestInstance.post({url:'/trans',data:postBody,headers:youdaoheaders})
}