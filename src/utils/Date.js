/**
 * 文档说明
 * author: baozi
 * description: 封装Date工具类
 * @createTime: 2022-11-12 16:41:31
 */
import DateConvert from './DateConvert.js';
const date = new Date();
const dateUtil={
	/**
	 * description: 返回当前年份
	 * author: baozi
	 * @createTime: 2022-11-12 16:57:15
	 */
	getCurrentYear: ()=>{
		return date.getFullYear();
	},
	/*
	* description: 返回当前月份 1-12
	*/
	getCurrentMonth: ()=>{
		return date.getMonth() + 1;
		
	},
	/*
	* description: 返回当前日 1-31
	*/
	getCurrentDay: ()=>{
		return date.getDate();
	},
	/*
	* description: 星期日为 0，星期一为 1，依此类推。
	*/
    getCurrentWeek: ()=>{
		let weekNumber = date.getDay();
		return DateConvert.convertWeek(weekNumber);
	},
	/**
	 * @param year
	 * @param month
	 * @param day
	 * @returns eg:{丁卯年，八月，十八}
	 */
	getLunarCalendar: (year,month,day)=>{
		return DateConvert.convertLunarCalendar(year,month,day);
	},
	/**
	* @returns 年月日，{2022，3 ，18}
	*/
	getStandardDate: ()=>{
		let standardTime={
			year: date.getFullYear(),
			month: date.getMonth() + 1,
			day: date.getDate()
		}
		return standardTime;
	},
	/**
	* @returns 小时、分钟{11,20}
	* 修复补0
	*/
	getCurrentTime: ()=>{
		let currentTime = {
			hours: date.getHours(),
			minutes: date.getMinutes()
		}
		if(currentTime.hours<10){
			currentTime.hours = "0"+currentTime.hours;
		}
		if(currentTime.minutes<10){
			currentTime.minutes = "0"+currentTime.minutes;
		}
		return currentTime;
	}
}
export default dateUtil;