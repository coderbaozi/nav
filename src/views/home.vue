<template>
	<div class="home-panel">
		<div class="clock-panel">
			<Time></Time>
		</div>
		
		<div class="search-panel">
			<search class="search"></search>
		</div>
	</div>
</template>

<script setup>
	import {getCurrentInstance} from 'vue'
	const {proxy} = getCurrentInstance(); 
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
			left: 200px;
			top: calc(15vh);
			width: calc(50vw);
			position: absolute;
		}
		.clock-panel{
			top: 80px;
			left: 625px;
			position: absolute;
		}
	}
</style>
