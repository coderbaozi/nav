<template>
	<div  class="cm-search-panel"  @keyup.tab="pressTab">
		<!-- 重构搜索组件
			1.留下icon插槽？还是封装进去
		 -->
		<div class="cm-icon-panel">
			<span :class="['iconfont',cueerntIcon]"></span>
		</div>

		<div class="cm-input-main">
			<input ref="autoFocus" id="input-text" class="cm-input-instance" placeholder="相信美好的事情将会发生" />
		</div>

	</div>

</template>


<script setup>
	import {
		ref
	} from 'vue';
	let iconfont = ref('iconfont');
	const ICON_NAME = {
		google: 'icon-guge',
		baidu: 'icon-baidu-fill'
	}
	let cueerntIcon = ref(ICON_NAME.google);
	/**
	 * description: 按下TAB键盘 切换图标同时切换搜索引擎
	 * author: baozi 
	 * @createTime: 2022-11-15 15:30:43
	 */
	const pressTab = () => {
		cueerntIcon.value=cueerntIcon.value == ICON_NAME.baidu? ICON_NAME.google: ICON_NAME.baidu;
	}
	/**
	 * description: 原生js阻止浏览器默认按下tab切换
	 * author: baozi
	 */
	document.onkeydown = (event)=>{
		let code = event.keyCode;
		if(code == 9){
			event.preventDefault();
		}
	}
	
</script>

<style lang="less">
	.cm-search-panel {
		display: flex;
		align-items: center;
		text-align: center;
		background-color: #fff;
		border-radius: 5px;

		.cm-icon-panel {
			margin: 0 10px;

			span {
				font-size: 30px;
			}
		}

		.cm-input-main {
			border-left: 2px solid #bababb;

			.cm-input-instance {
				border-style: none;
				text-align: center;
				width: calc(28vw);
				font-size: 18px;
				line-height: 45px;
			}
		}

	}

	.cm-input-instance:focus {
		outline: 1px solid dodgerblue;
	}
</style>
