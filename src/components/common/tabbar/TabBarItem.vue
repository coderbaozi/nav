<template>
  <!-- 开发三种排列方式左右排列 、上下排列
  指定icon大小samll、mid、large
  指定border
  -->
  <div :class="['cm-tabbar-item', getCurrentRoute() == getCurrentProp() ? 'active' : '']" @click="handleItemClick">
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
import { ref ,onMounted } from 'vue'
const props = defineProps({
  path: {
    type: String,
    default: '',
  }
})

const router = useRouter()
const route = useRoute()

/*
 * @Description: 点击路由跳转
 * @Author: baozi
 * @Date: 2022-12-09 15:20:18
 */
const handleItemClick = () => {
  router.push({
    path: props.path,
  })
}

const getCurrentRoute = () =>{
  return route.path
}

const getCurrentProp = () => {
  return props.path
}
</script>

<style scoped lang="less">
.active {
  color:  var(--active-blue) !important;
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
