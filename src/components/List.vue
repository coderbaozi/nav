<template>
	<div>
		<t-space direction="vertical">
			<t-list>
				<t-list-item :class="selectedIndex == index ?'selected':''" @mouseover="selectedItem(item,index)" :key="index" v-for="(item,index) in content">
					<div :class="['cm-list-panel']">
						<icon-search :class="['cm-list-icon']"></icon-search>
						<div :class="['cm-association-content']">
							{{item}}
						</div>
					</div>
				</t-list-item>
			</t-list>
		</t-space>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import iconSearch from '@/assets/icon/svg/Search.svg'
	const props = defineProps({
		content: {
			type: Array,
		},
		selectedNumber: {
			type: Number,
			default: -1
		},
		size:{
			type: Number,
			default: 8
		}
	});
	let selectedIndex = ref(-1);
	const emit = defineEmits();
	
	const selectedItem = (item,index) =>{
		selectedIndex.value = index;
		emit('selectedInputValue',item);
	}
	
</script>

<style lang="less">
	
	/* 文本框选状态 */
	.selected{
		background-color: #D3D5D8;
	}
	/* 文字居中覆盖原生样式 */
	.t-list-item-main {
		justify-content: flex-start;
	}
	.t-list-item{
		cursor: pointer;
		width: calc(30vw - 48px);
	}
	.cm-list-panel{
		display: flex;
		.cm-list-icon {
			padding-right: 30px;
			width: 18px;
			height: 18px;
		}
	}
	
</style>
