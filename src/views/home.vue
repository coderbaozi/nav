<template>
  <div @touchmove="getCoordinate" class="home-panel">
    <!-- topbar -->
    <div class="topbar-panel">
      <TabBar show-mode="logo">
        <template #Showlogo>
          <icon-logo class="icon-logo"></icon-logo>
          <span>Direction</span>
        </template>
        <TabBarItem>
          <template #tabbarContent>
            <Radio></Radio>
          </template>
        </TabBarItem>
        <TabBarItem path="">
          <template #tabbarContent>
            <div>contact</div>
          </template>
        </TabBarItem>
        <TabBarItem path="">
          <template #tabbarContent>
            <div>关于我们</div>
          </template>
        </TabBarItem>
      </TabBar>
    </div>
    <!-- clock -->
    <div class="clock-panel">
      <Time :fontColor="fontColor"></Time>
    </div>
    <!-- tabbar -->
    <div class="tabbar-panel">
      <TabBar>
        <TabBarItem active-default path="/home/search">
          <template #tabbarContent>
            <div>搜索</div>
          </template>
        </TabBarItem>
        <TabBarItem path="/home/translate">
          <template #tabbarContent>
            <div>翻译</div>
          </template>
        </TabBarItem>
      </TabBar>
    </div>
    <!-- search -->
    <div class="search-panel">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import iconLogo from '@/assets/icon/svg/Logo.svg'
import TabBar from '../components/common/tabbar/TabBar.vue'
import TabBarItem from '../components/common/tabbar/TabBarItem.vue'
import Time from '../components/feature-Clock/Time.vue'
import Radio from '../components/common/Radio/Radio.vue'
// 改变时间组件颜色
let fontColor = ref('white')

const getCoordinate = (e) => {
  console.log('test')
  console.log(e)
}
</script>

<style lang="less">
.home-panel {
  // 实现响应式
  width: 100%;
  display: flex;
  position: relative;
  height: 100vh;
  justify-content: center;
  background-color: var(--bg-grey-1);
  .topbar-panel {
    width: 100%;
    .icon-logo {
      width: 36px;
      height: 32px;
    }
    :hover {
      display: flex;
    }
  }
  .search-panel {
    position: absolute;
    top: 340px;
  }
  .clock-panel {
    position: absolute;
    top: 150px;
  }
  .tabbar-panel {
    position: absolute;
    top: 308px;
  }
}
</style>
