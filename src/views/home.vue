<template>
	<div class="home-panel">

		<div class="clock-panel">
			<Time :fontColor="fontColor"></Time>
		</div>

		<div class="search-panel">
			<search class="search-main" @getInputValue="getInputValue"></search>
		</div>
	</div>
</template>


<script setup>
	import { ref ,getCurrentInstance } from 'vue'
	import {GOOGLE_ASSOCAITION_URL,BING_ASSOCAITION_URL,BAIDU_ASSOCAITION_URL} from '@/constant/sugConstant.js'
	const { proxy } = getCurrentInstance();
	let fontColor = ref('white');
	
	const getInputValue = (value) => {
		const config = {
			sugUrl: BAIDU_ASSOCAITION_URL,
			sugContent: value
		}
		if(value){
			window.getAssociation(config);
		}
		
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
