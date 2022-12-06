<template>
  <div>
    num1: <input v-model.number = "num1" style="width:100px" />
    <br/>
    num2: <input v-model.number = "num2" style="width:100px"/>
    加法结果：{{addNum}}
  </div>
</template>

<script setup>
// 测试自定义hooks
import { ref } from 'vue';
import useAdd from '../hooks/useAdd'
const num1 = ref(1)
const num2 = ref(2)
// 加法功能- 自定义hook （将响应式变量或者方法暴露出来）
const {addNum, addFn} = useAdd({num1,num2})
addFn(num1.value,num2.value)

</script>

<style lang="less"></style>
