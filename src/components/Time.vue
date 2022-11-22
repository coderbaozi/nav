<template>
	<div :class="fontColor">
		<div class="cm-time-penal" :fontColor="fontColor">
			<div class="cm-time-date">
				{{solarDate.month}}月{{solarDate.day}}日{{week}} .
				{{lunarDate.lunarYear}}{{lunarDate.standardMonth}}{{lunarDate.standardDay}}
			</div>
			<div class="cm-clock">
				{{currentTime.hours}} : {{currentTime.minutes}}
			</div>
		</div>
	</div>
	
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import DateUtils from '../utils/Date.js'
	let solarDate = ref();
	let lunarDate = ref();
	solarDate.value = DateUtils.getStandardDate();
	let currentDate = DateUtils.getStandardDate();
	lunarDate.value = DateUtils.getLunarCalendar(currentDate.year, currentDate.month, currentDate.day);
	let week = ref();
	week.value = DateUtils.getCurrentWeek();
	let currentTime = ref();
	currentTime.value = DateUtils.getCurrentTime();

	/**
	 * description: 定义组件切换时间字体颜色prop
	 * author: baozi
	 * @createTime: 2022-11-12 21:49:45
	 */
	const props = defineProps({
		fontColor: {
			type: String,
			default: 'white'
		}
	});
	let fontColor = ref(props.fontColor);
</script>

<style lang="less" scoped>
	// 黑白两色
	.white{
		color: #fff;
		.cm-clock{
			border: solid #DCDCDC 4px;
		}
	}
	
	.black{
		color: #000;
		.cm-clock{
			border: solid #000 4px;
		}
	}
	
	.cm-time-penal {
		width: 320px;
		padding: 20px;
		background-color: rgba(255, 255, 255, 0);
		.cm-time-date {
			font-size: 20px;
			font-weight: bold;
			text-align: center;
			margin-bottom: 20px;
		}
		.cm-clock {
			font-size: 80px;
			text-align: center;
			border-radius: 10px;
		}
	}
</style>
