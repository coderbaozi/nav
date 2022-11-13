/**
 * description: bean工厂返回所有需要的bean
 * author: baozi
 * @createTime: 2022-11-13 13:55:31
 */

const beanFactory = {
	/**
	 * description: 返回一个Date对象实例
	 * author: baozi
	 * @return Object Date
	 * @createTime: 2022-11-13 13:56:32
	 */
	getDateBean: ()=>{
		return new Date();
	}
}
export default beanFactory;