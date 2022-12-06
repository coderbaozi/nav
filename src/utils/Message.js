/*
 *@Description: 封装消息
 *@Author: baozi
 *@Date: 2022-12-02 14:33:22
 */
import { NotifyPlugin } from 'tdesign-vue-next'

const Message = {
  info: (content) => {
    NotifyPlugin.info({
      title: 'info',
      content: content,
      duration: 2000,
    })
  },
  success: (content) => {
    NotifyPlugin.success({
      title: 'success',
      content: content,
      duration: 2000,
    })
  },
  waring: (content) => {
    NotifyPlugin.warning({
      title: 'warning',
      content: content,
      duration: 2000,
    })
  },
  error: (content) => {
    NotifyPlugin.error({
      title: 'error',
      content: content,
      duration: 2000,
    })
  },
}
export default Message
