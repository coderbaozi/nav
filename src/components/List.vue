<template>
	<div>
		<t-space direction="vertical">
			<t-list>
				<t-list-item :class="selectedIndex == index ?'selected':''" @mouseover="selectedItem(item,index)" :key="index" v-for="(item,index) in content">
					<div :class="['cm-list-panel']">
						<div :class="['cm-list-icon']">
							<svg t="1668862845981" class="search-icon" viewBox="0 0 1024 1024" version="1.1"
								 p-id="2224" width="18" height="18">
								<path
									d="M465.454545 884.363636C223.809164 884.363636 27.927273 688.481745 27.927273 446.836364S223.809164 9.309091 465.454545 9.309091 902.981818 205.190982 902.981818 446.836364 707.099927 884.363636 465.454545 884.363636z m0-55.854545c210.795055 0 381.672727-170.877673 381.672728-381.672727S676.2496 65.163636 465.454545 65.163636 83.781818 236.041309 83.781818 446.836364 254.659491 828.509091 465.454545 828.509091z"
									fill="#0069F6" p-id="2225"></path>
								<path
									d="M791.078956 839.883175m19.747564-19.747564l0 0q19.747564-19.747564 39.495128 0l144.815469 144.815469q19.747564 19.747564 0 39.495127l0 0q-19.747564 19.747564-39.495128 0l-144.815469-144.815468q-19.747564-19.747564 0-39.495128Z"
									fill="#5ED7BC" p-id="2226"></path>
							</svg>
						</div>
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
		width: calc(30vw - 48px);
		cursor: pointer;
	}
	.cm-list-panel{
		display: flex;
		.cm-list-icon {
			padding-right: 30px;
			.search-icon {
				width: 15px;
				height: 15px;
			}
		}
	}
	
</style>
