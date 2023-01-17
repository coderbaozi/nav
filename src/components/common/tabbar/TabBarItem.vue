<template>
  <!-- 开发三种排列方式左右排列 、上下排列
  指定icon大小samll、mid、large
  指定border
  -->
  <div :class="['cm-tabbar-item', isActive ? 'active' : '']" @click="changeActive">
    <div class="cm-item-icon">
      <slot name="tabbarIcon"></slot>
    </div>
    <div class="cm-item-content">
      <slot name="tabbarContent"></slot>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const route = useRoute()
const props = defineProps({
  path: {
    type: String,
    default: '',
  },
  activeDefault: {
    type: Boolean,
    default: false,
  },
})

let activeStyle = ref()
let isActive = ref(false)
/*
 * @Description: 初始化组件
 * @Author: baozi
 * @Date: 2022-12-19 13:51:52
 */
const initTarbarItem = () => {
  // 定义props可以定义默认活跃组件
  props.activeDefault ? (isActive.value = true) : ''
}

/*
 * @Description: 点击切换活跃状态和路由
 * @Author: baozi
 * @Date: 2022-12-09 15:20:18
 */
const changeActive = () => {
  route.path == props.path ? (isActive.value = true) : (isActive.value = false)
  router.push({
    path: props.path,
  })
  console.log('route', route.path)
  console.log('props', props.path)
}

props.activeDefault ? initTarbarItem() : ''
</script>

<style scoped lang="less">
.active {
  border-bottom: 2px solid var(--active-blue);
}
.cm-tabbar-item {
  color: var(--text-color-default);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  cursor: pointer;
  :hover {
    color: var(--active-blue);
  }
}
</style>
