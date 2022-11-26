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
	const getInputValue = (value) => {
		const config = {
			sugUrl: currentSearchEngine,
			sugContent: value
		}
		if (value) {
			window.getAssociation(config);
		}
	}

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
			position: absolute;
			left: 540px;
			top: 350px;
			width: calc(34.15vw);
		}

		.clock-panel {
			top: 80px;
			left: 635px;
			position: absolute;
		}
	}
</style>
