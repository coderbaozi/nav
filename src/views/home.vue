<template>
	<div class="home-panel">

		<div class="clock-panel">
			<Time :fontColor="fontColor"></Time>
		</div>

		<div class="search-panel">
			<search @currentSearchEngine="getCurrentEngine" class="search-main" @getInputValue="getInputValue"></search>
		</div>
	</div>
</template>


<script setup>
	import {
		ref,
		getCurrentInstance
	} from 'vue'
	import {
		GOOGLE_ASSOCAITION_URL,
		BING_ASSOCAITION_URL,
		BAIDU_ASSOCAITION_URL
	} from '@/constant/sugConstant.js'
	const {
		proxy
	} = getCurrentInstance();
	let fontColor = ref('white');
	let currentSearchEngine = GOOGLE_ASSOCAITION_URL;
	
	/**
	 * description: 获取输入框内容，并发送jsonp内容
	 * TODO 节流实现
	 * author: baozi
	 * @createTime: 2022-11-27 22:01:54
	 */
	const getInputValue = (value) => {
		const config = {
			sugUrl: currentSearchEngine,
			sugContent: value
		}
		if (value) {
			window.getAssociation(config);
		}
	}
	
	/**
	 * description: 根据icon获取当前选中的搜索引擎
	 * author: baozi
	 * @createTime: 2022-11-27 22:02:43
	 */
	const getCurrentEngine = (engineUrl) => {
		currentSearchEngine = engineUrl;
	}
</script>

<style lang="less">
	.home-panel {
		// 实现响应式
		width: 100%;
		height: calc(100vh);
		background-size: cover;
		background-position: center;
		background-image: url('../assets/background.jpg');

		.search-panel {
			top: 350px;
			left: 540px;
			width: calc(30vw);
			position: absolute;
		}

		.clock-panel {
			top: 80px;
			left: 635px;
			position: absolute;
		}
	}
</style>
