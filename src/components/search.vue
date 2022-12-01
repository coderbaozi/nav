<template>
	<div class="cm-search-panel" @keydown.tab="pressTab">
		<!-- 重构搜索组件
			1.留下icon插槽？还是封装进去
		 -->
		<div class="cm-icon-panel">
			<span :class="['iconfont',currentIcon]"></span>
		</div>

		<div class="cm-input-main">
			<input @blur="changePosition" @keydown.down="selectedNext" @keydown.up="selectedUp" v-model="inputValue" @input="checkInputValue" autofocus
				:class="['cm-input-instance',textPosition]" placeholder="相信美好的事情将会发生" />
		</div>

		<div v-if="inputValue"  class="association-list">
			<List @selectedInputValue = 'changeInputValueBySelected'  :seleted='currentListIndex' :content='associationContent'></List>
		</div>
	</div>

</template>

<!-- jsonp请求 config{TODO 搜索引擎名称,sugUrl,sugContent}-->
<script>
	window.getAssociation = (config) => {
		let {
			sugUrl,
			sugContent
		} = config;

		sugUrl = sugUrl.replace("#content#", sugContent);
		//动态添加JS脚本
		let script = document.createElement("script");
		script.src = sugUrl;
		document.getElementsByTagName("head")[0].appendChild(script);
	};
</script>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		GOOGLE_ASSOCAITION_URL,
		BING_ASSOCAITION_URL,
		BAIDU_ASSOCAITION_URL
	} from '@/constant/sugConstant.js'
	
	/**
	 * description: 监听组件选择联想词
	 * author: baozi
	 * @createTime: 2022-11-28 12:05:54
	 */
	const changeInputValueBySelected = (value) => {
		inputValue.value = value;
	}
	//默认选中的List为没有
	let currentListIndex = ref(-1);
	const selectedNext = () => {
		currentListIndex.value++;
	}
	const selectedUp = () => {
		currentListIndex.value--;
	}
	
	// 给父组件传递inputValue和搜索引擎名称 来生成联想词
	let inputValue = ref();
	const emit = defineEmits();

	let iconfont = ref('iconfont');
	let associationContent = ref();

	/**
	 * description: 百度联想回调函数
	 * author: baozi
	 * @createTime: 2022-11-19 20:12:31
	 */
	window.baidu = {
		sug: (res) => {
			associationContent.value = res.s;
		}
	};

	/**
	 * description: 谷歌联想回调函数
	 * author: baozi
	 * @createTime: 2022-11-19 20:12:31
	 */
	window.google = {
		sug: (res) => {
			let resArray = [];
			let handledArray = [];
			for (let index in res[1]) {
				resArray.push(res[1][index][0]);
			}
			// 处理返回的个数
			if (resArray.length > 8) {
				for (let index = 0; index < 8; index++) {
					handledArray.push(resArray[index]);
				}
			}
			associationContent.value = handledArray;
		}
	};

	/**
	 * description: 必应联想回调函数
	 * author: baozi
	 * @createTime: 2022-11-19 20:12:31
	 */
	window.bing = {
		sug: (res) => {
			let resArray = [];
			let unhandleArray = res.AS.Results;
			for (let index in unhandleArray) {
				for (let tindex in unhandleArray[index].Suggests) {
					resArray.push(unhandleArray[index].Suggests[tindex].Txt);
				}
			}
			associationContent.value = resArray;
		}
	};

	const ICON_NAME = {
		google: 'icon-guge',
		baidu: 'icon-baidu-fill',
		bing: 'icon-bing',
	}

	let currentIcon = ref(ICON_NAME.google);
	let textPosition = ref('center');
	let isInput = false;

	/**
	 * description: 按下TAB键盘 切换图标同时切换搜索引擎
	 * author: baozi 
	 * @createTime: 2022-11-15 15:30:43
	 * TODO 待优化
	 */
	const pressTab = () => {
		if (currentIcon.value == ICON_NAME.google) {
			currentIcon.value = ICON_NAME.baidu;
			//将当前搜索引擎抛出
			emit('currentSearchEngine', BAIDU_ASSOCAITION_URL);
		} else if (currentIcon.value == ICON_NAME.baidu) {
			currentIcon.value = ICON_NAME.bing;
			emit('currentSearchEngine', BING_ASSOCAITION_URL);
		} else {
			currentIcon.value = ICON_NAME.google;
			emit('currentSearchEngine', GOOGLE_ASSOCAITION_URL);
		}

	};

	/**
	 * description: 阻止alt+tab引发的bug
	 * author: baozi
	 * TODO 似乎已解决
	 */
	const prevent = () => {

	};

	/**
	 * description: 原生js 阻止浏览器默认按下tab切换
	 * author: baozi
	 * TODO 出现alt加tab bug
	 */
	document.onkeydown = (event) => {
		let code = event.keyCode;
		if (code == 9) {
			event.preventDefault();
		}
	};

	/**
	 * description: 检查是否input框中是否有输入
	 * author: baozi
	 */
	const checkInputValue = (event) => {
		if (event) {
			textPosition.value = 'left';
		}
		isInput = true;
		// 将数据传给父组件 ，
		emit('getInputValue', inputValue.value);
	};

	/**
	 * description: 失去焦点改变位置
	 * author: baozi
	 */
	const changePosition = () => {
		if (!inputValue.value) {
			textPosition.value = 'center';
		}
	};
	
	/**
	 * description: 阻止输入框上下的默认行为
	 * author: baozi
	 * @createTime: 2022-11-27 22:12:34
	 */
	const preventDownAndUp = () => {
		console.log('PreventIng');
	}
</script>

<style lang="less">
	// 动态css
	.left {
		text-align: left;
	}

	.center {
		text-align: center;
	}

	.cm-search-panel {
		display: flex;
		flex-wrap: wrap;
		border-radius: 5px;
		align-items: center;
		flex-direction: row;
		background-color: #fff;
		.cm-icon-panel {
			padding: 8px;
			margin: 0 10px;
			span {
				font-size: 30px;
			}
		}

		.cm-input-main {
			padding-left: 3px;
			width: calc(30vw - 69px);
			.cm-input-instance {
				width: 100%;
				font-size: 18px;
				line-height: 100%;
				border-style: none;
			}
		}

	}

	.cm-input-instance:focus {
		outline: none;
	}
</style>
