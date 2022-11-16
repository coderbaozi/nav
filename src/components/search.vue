<template>
	<div  class="cm-search-panel"  @keyup.tab="pressTab">
		<!-- 重构搜索组件
			1.留下icon插槽？还是封装进去
		 -->
		<div class="cm-icon-panel">
			<span :class="['iconfont',cueerntIcon]"></span>
		</div>

		<div class="cm-input-main">
			<input @blur="changePosition" @input="checkInputValue" autofocus :class="['cm-input-instance',textPosition]" placeholder="相信美好的事情将会发生" />
		</div>

	</div>

</template>

<script setup>
	import {
		ref,
		nextTick
	} from 'vue';
	
	let iconfont = ref('iconfont');
	
	const ICON_NAME = {
		google: 'icon-guge',
		baidu: 'icon-baidu-fill'
	}
	
	let cueerntIcon = ref(ICON_NAME.google);
	let textPosition = ref('center');
	let inputValue = '';
	/**
	 * description: 按下TAB键盘 切换图标同时切换搜索引擎
	 * author: baozi 
	 * @createTime: 2022-11-15 15:30:43
	 */
	const pressTab = () => {
		cueerntIcon.value=cueerntIcon.value == ICON_NAME.baidu? ICON_NAME.google: ICON_NAME.baidu;
	}
	/**
	 * description: 阻止alt+tab引发的bug
	 * author: baozi
	 * TODO
	 */
	const prevent =()=>{
			
	}
	/**
	 * description: 原生js 阻止浏览器默认按下tab切换
	 * author: baozi
	 * TODO 出现alt加tab bug
	 */
	document.onkeydown = (event)=>{
		let code = event.keyCode;
		if(code == 9){
			event.preventDefault();
		}
	}
	/**
	 * description: 检查是否input框中是否有输入
	 * author: baozi
	 */
	const checkInputValue = (event) => {
		if(event){
			textPosition.value = 'left';
		}
		inputValue = event.data;
	}
	/**
	 * description: 失去焦点改变位置
	 * author: baozi
	 */
	const changePosition = () => {
		if(!inputValue){
			textPosition.value = 'center';
		}
	}
</script>

<style lang="less">
	// 动态css
	.left{
		text-align: left;
	}
	
	.center{
		text-align: center;
	}
	
	.cm-search-panel {
		display: flex;
		align-items: center;
		text-align: center;
		background-color: #fff;
		border-radius: 5px;

		.cm-icon-panel {
			margin: 0 10px;
			padding: 8px;
			span {
				font-size: 30px;
			}
		}
		
		.cm-input-main {
			border-left: 2px solid #bababb;
			padding-left: 5px;
			.cm-input-instance {
				border-style: none;
				width: calc(30vw);
				font-size: 18px;
				line-height: 45px;
			}
		}

	}

	.cm-input-instance:focus {
		outline: none;
	}
</style>
