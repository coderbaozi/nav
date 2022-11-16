<template>
	<div class="home-panel">
		
		<div class="clock-panel">
			<Time :fontColor="fontColor"></Time>
		</div>
		
		<div class="search-panel">
			<search class="search"></search>
		</div>
	</div>
</template>

<script setup>
	import {ref,getCurrentInstance} from 'vue'
	const {proxy} = getCurrentInstance();
	let fontColor = ref('white');
	
	const test = () => {
		let res = proxy.Request({
			url:'/api/captchaImage'
		});
		console.log(res);
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
		.search-panel{
			position: absolute;
			left: 540px;
			top: 350px;
			width: calc(34.15vw);
		}
		.clock-panel{
			top: 80px;
			left: 635px;
			position: absolute;
		}
	}
</style>
