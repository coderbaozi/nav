<script setup>
import DefaultApp from './Common/defaultApp.vue';
const apps = [{
  icon: 'https://s1.ax1x.com/2023/05/02/p9GTG7T.jpg',
  name: 'tiktok',
  url: 'https://www.douyin.com/'
},
{icon: 'https://s1.ax1x.com/2023/05/02/p9GHNl9.jpg',
name: 'bilibili',
url: 'https://www.bilibili.com/'},{
  icon: 'https://s1.ax1x.com/2023/05/02/p9Gqaa6.png',
  name:'about me',
  url:'https://github.com/coderbaozi'
}]
</script>

<template>
  <div class="cm-panel">
    <template v-for="app in apps">
      <DefaultApp :name="app.name" :icon="app.icon" :url="app.url"></DefaultApp> 
    </template>
  </div>
</template>


<style scoped lang="less">
.cm-panel {
  margin-top: 20px;
  display: flex;
  gap:20px;
}
</style>
