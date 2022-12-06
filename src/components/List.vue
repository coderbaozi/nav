<template>
  <div>
    <t-space direction="vertical">
      <t-list>
        <t-list-item
          :class="selectedIndex == index ? 'selected' : ''"
          @mouseover="selectedItem(index, item)"
          :key="index"
          v-for="(item, index) in content">
          <div :class="['cm-list-panel']">
            <icon-search :class="['cm-list-icon']"></icon-search>
            <div :class="['cm-association-content']">
              {{ item }}
            </div>
          </div>
        </t-list-item>
      </t-list>
    </t-space>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import iconSearch from '@/assets/icon/svg/Search.svg'
const props = defineProps({
  content: {
    type: Array,
    default: [],
  }
})
let selectedIndex = ref(-1)
const emit = defineEmits()
// 将当前组件的被选择的索引值和content数组大小暴露
defineExpose({
  selectedIndex
})

/*
 * @Description: 鼠标放置选中List并将联想index 和 value传递
 * @Author: baozi
 * @Date: 2022-12-04 09:32:31
 */
const selectedItem = (index, item) => {
  selectedIndex.value = index
  emit('selectedInputValue',{index,item})
}
</script>

<style lang="less">
/* 文本框选状态 */
.selected {
  background-color: #d3d5d8;
}
/* 文字居中覆盖原生样式 */
.t-list-item-main {
  justify-content: flex-start;
}
.t-list-item {
  cursor: pointer;
  width: calc(30vw - 48px);
}
.cm-list-panel {
  display: flex;
  .cm-list-icon {
    padding-right: 30px;
    width: 18px;
    height: 18px;
  }
}
</style>
