<template>
  <div @touchmove="getCoordinate" class="home-panel">
    <!-- topbar -->
    <div class="topbar-panel">
      <TabBar show-mode="logo">
        <template #Showlogo>
          <icon-logo class="icon-logo"></icon-logo>
          <span class="nav">nav</span>
        </template>
        <TabBarItem>
          <template #tabbarContent>
            <Radio></Radio>
          </template>
        </TabBarItem>
      </TabBar>
    </div>
    <!-- clock -->
    <div class="clock-panel">
      <Time :fontColor="fontColor"></Time>
    </div>

    <!-- search -->
    <div class="search-panel">
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
      <router-view></router-view>
      <div class="panel">
        <Panel />
      </div>
    </div>
    <div class="footer">
      <Footer></Footer>
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
import Panel from "@/components/Panel/panel.vue";
import Footer from "@/components/common/TheFooter.vue";

// 改变时间组件颜色
let fontColor = ref('white')

const getCoordinate = (e) => {
  console.log('test')
  console.log(e)
}
</script>

<style lang="less">
.nav {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;;
}
.home-panel {
  // 实现响应式
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  height: 100vh;
  z-index: 0;
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
    display: flex;
    flex-direction: row;
    width: 30vw;
    flex-wrap: wrap;
    .tabbar-panel {
      padding: 6px;
    }
  }
}
.panel {
  position: absolute;
  z-index: -1;
  top: 260px;
}
.footer {
  position: fixed;
  bottom: 0;
}
</style>
