<template>
  <div class="cm-tabbar" :show-mode="mode">
    <div class="cm-logo-placeholder">
      <slot name="Showlogo"></slot>
    </div>
    <div class="cm-tabbar-items">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  showMode: {
    // 展示模式 logo/tabbar+上下icon/tabbar+左右icon
    type: String,
    default: 'default',
  },
})
let mode = ref(props.showMode)
</script>

<style scoped lang="less">
//采用css变量解决mode问题
[show-mode='logo'] {
  --display: flex;
  --border-bottom: 1.5px solid var(--bg-grey-3);
  --logoBoxHeigth: 52px;
  --flex-direction: row-reverse;
}
[show-mode='tabbar'] {
  --display: block;
  --align-items: center;
}
.cm-tabbar {
  display: var(--display);
  align-items: center;
  .cm-logo-placeholder {
    display: flex;
    margin-left: 30px;
    padding-left: 10px;
    align-items: center;
    height: var(--logoBoxHeigth);
  }
  .cm-tabbar-items {
    display: flex;
    flex-direction: var(--flex-direction);
    padding-right: 60px;
    width: 100%;
    align-items: var(--align-items);
  }
}
</style>
