<template>
  <div>
    <t-space direction="vertical">
      <t-list :class="haveBorder ? 'cm-list-border' : ''">
        <t-list-item
          :class="selectedIndex == index ? 'selected' : ''"
          @mouseover="selectedItemByMouse(index, item)"
          :key="index"
          v-for="(item, index) in content">
          <div class="cm-list-panel">
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
  },
  haveBorder: {
    type: Boolean,
    default: false,
  },
})
let selectedIndex = ref(-1)
let showBorder = ref(false)

const emit = defineEmits()
// 将当前组件的被选择的索引值和content数组大小暴露
defineExpose({
  selectedIndex,
})

/*
 * @Description: 鼠标放置选中List并将联想index 和 value传递
 * @Author: baozi
 * @Date: 2022-12-04 09:32:31
 */
const selectedItemByMouse = (index, item) => {
  selectedIndex.value = index
  emit('selectedInputValue', { index, item })
}
/*
 * @Description: list组件init方法
 * @Author: baozi
 * @Date: 2022-12-19 21:03:22
*/
const listComInit = () => {
  if(props.haveBorder) {
    showBorder.value = true
  }
}

listComInit()
</script>

<style lang="less">
/* 文本框选状态 */
.selected {
  background-color: var(--bg-grey-3);
}
/* 文字居中覆盖原生样式 */
.t-list-item-main {
  justify-content: flex-start;
}
.t-list-item {
  cursor: pointer;
  padding-left: 15px;
  width: calc(27vw - 3.5px) ;
}
.cm-list-border {
  border-radius: 0px 0px 10px 10px;
}
.cm-list-panel {
  display: flex;
  .cm-list-icon {
    width: 18px;
    height: 18px;
    padding-right: 26px;
  }
}
</style>
