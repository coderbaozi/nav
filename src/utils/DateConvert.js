/**
 * description: 转换 时间
 * author: baozi
 * @createTime: 2022-11-12 17:00:34
 */
import {calendar} from 'js-calendar-converter';
const WEEK = ['星期一','星期二','星期三','星期四','星期五','星期六','星期天','不合法！'];

const DateConvert = {
	/**
	 * description: 星期number转为汉字
	 * author: baozi
	 * @createTime: 2022-11-12 17:08:31
	 */
	convertWeek: (index)=>{
		if(index < 0 || index > 7){
			return WEEK[7];
		}
		return WEEK[index];
	},
	/**
	 * description: 将日期转换为阴历,目前只支持1900年至2100
	 * details: https://github.com/jjonline/calendar.js
	 * author: baozi
	 * @param year
	 * @param month
	 * @param day
	 * @returns eg:{丁卯年，八月，十八}
	 * @createTime: 2022-11-12 17:08:31
	 */
	convertLunarCalendar: (year,month,day)=>{
		const {gzYear,IMonthCn,IDayCn} = calendar.solar2lunar(year,month,day);
		let convertRes={
			lunarYear: gzYear+'年',
			standardMonth: IMonthCn,
			standardDay: IDayCn,
		};
		return convertRes;
	}
}
export default DateConvert;