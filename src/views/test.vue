<template>
  <!-- <div>
    <TabBar show-mode="logo">
      <template #Showlogo>
        <icon-logo class="icon-test"></icon-logo>
        <span>Direction</span>
      </template>
      <TabBarItem>
        <template #tabbarIcon> </template>
        <template #tabbarContent>
          <div>搜索</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/translate">
        <template #tabbarContent>
          <div>翻译</div>
        </template>
      </TabBarItem>
      <TabBarItem>
        <template #tabbarContent>
          <Switch></Switch>
        </template>
      </TabBarItem>
    </TabBar>
  </div> -->
  <div  class="test-main">
    <Radio> </Radio>
  </div>
  <p>ceshi</p>
</template>

<script setup>
import TabBar from '../components/common/tabbar/TabBar.vue'
import TabBarItem from '../components/common/tabbar/TabBarItem.vue'
import iconLogo from '@/assets/icon/svg/Logo.svg'
import Radio from '@/components/common/Radio/Radio.vue'
import iconLight from '@/assets/icon/svg/Sun.svg'
import iconDark from '@/assets/icon/svg/Moon.svg'
</script>

<style lang="less">
.icon-test {
  vertical-align: -0.15em;
}
.test-main {
  position: absolute;
  top: 30px;
  left: 60px;
}
p{
  color: var(--fontColor);
}
</style>
