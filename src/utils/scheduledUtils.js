/**
 * description: 封装js 定时执行任务
 * author: baozi
 * @createTime: 2022-11-13 16:25:36
 */

const scheduleUtils = {
  /**
   * description: 设置执行函数定时任务
   * author: baozi
   * @param func 定时执行的函数
   * @param millisec 执行的时间间隔 单位：毫秒
   * @return
   */
  setScheduledFunctionTask: (func, millisec) => {
    let functionTask = setInterval(func, millisec)
    return functionTask
  },
}
export default scheduleUtils
