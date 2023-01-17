<template>
  <div class="cm-translate-panel">
    <div class="cm-translate-topbar">
      <TabBar>
        <TabBarItem>
          <template #tabbarContent>
            <div>有道翻译</div>
          </template>
        </TabBarItem>
        <TabBarItem>
          <template #tabbarContent>
            <div>百度翻译</div>
          </template>
        </TabBarItem>
        <TabBarItem>
          <template #tabbarContent>
            <div>谷歌翻译</div>
          </template>
        </TabBarItem>
      </TabBar>
      <div class="tranlate-icon">
        <translate-icon></translate-icon>
      </div>
    </div>
    <div class="cm-translate-res">
      <div class="cm-translate-input">shurukuang</div>
      <div class="cm-translate-show">zhanhsi</div>
    </div>
  </div>
</template>

<script setup>
import TabBar from '../common/tabbar/TabBar.vue'
import TabBarItem from '../common/tabbar/TabBarItem.vue'
import translateIcon from '@/assets/icon/svg/Translate.svg'
</script>

<style scoped lang="less">
.cm-translate-panel {
  height: 249px;
  width: 740px;
  border: 1.5px solid #5f5555;
  border-radius: 20px;
  .cm-translate-topbar {
    display: flex;
    padding: 8px 8px 8px 40px;
    align-items: center;
    border-bottom: 1px solid #d8d8d8;
  }
  .translate-icon {
    width: 80px;
  }
  .cm-translate-res {
    display: flex;
    padding: 16px;
    .cm-translate-input,
    .cm-translate-show {
      height: 100%;
      width: 50%;
    }
    .cm-translate-input {
      border-right: 1px solid #d8d8d8;
    }
  }
}
</style>
