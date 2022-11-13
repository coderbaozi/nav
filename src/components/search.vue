<template>
	<div class="search-panel">
		
		<t-input-adornment>
			<t-input :align="position" @click="clickPosition" @change="checkInput" @blur="changePosition" size="large" autofocus placeholder="相信美好的事情终会发生">
				<template #prefix-icon>
					<span class="iconfont icon-guge"></span>
				</template>
			</t-input>
		</t-input-adornment>

	</div>

</template>


<script setup>
	import {ref} from 'vue';
	const position=ref('center');
	const POSITION_CENTER='center';
	const POSITION_LEFT='left';
	const clickPosition=()=>{
		position.value='left'
	}
	const changePosition = (value)=>{
		if(!value){
			position.value='center';
		}
		
	};
	const checkInput=()=>{
		position.value='left'
	}
</script>

<style scoped>

</style>
