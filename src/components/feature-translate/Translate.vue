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
      <div class="cm-translate-input">
        <textarea required autofocus class="input-instance"></textarea>
        <label class="cm-label">出发，探索世界</label>
      </div>
      <div class="cm-divide-line"></div>
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
  display: flex;
  flex-direction: column;
  height: 248px;
  width: 680px;
  border: 1.5px solid #5f5555;
  border-radius: 10px;
  background-color: #fff;
  .cm-translate-topbar {
    display: flex;
    padding: 8px 8px 8px 10px;
    align-items: center;
    border-bottom: 1px solid #d8d8d8;
  }
  .translate-icon {
    width: 30px;
  }
  .cm-translate-res {
    display: flex;
    height: 100%;
    .cm-translate-input,
    .cm-translate-show {
      height: 100%;
      width: 50%;
      padding: 16px;
    }
    .cm-divide-line {
      border: 1px solid #d8d8d8;
    }
    .cm-translate-input {
      position: relative;
      overflow: hidden;
      .input-instance {
        border: none;
        display: flex;
        width: 100%;
        height: 86%;
        resize: unset;
        text-align: left;
        font-size: 18px;
        outline: none;
        &:valid,
        &:focus {
          & ~ label {
            left: 100%;
            transition: all 0.8s;
          }
        }
      }
      .cm-label {
        color: #d8d8d8;
        font-size: 18px;
        width: 100%;
        position: absolute;
        top: 30%;
        left: 24%;
        transition: all 0.3s;
        transform: translateX(0);
        pointer-events: none;
      }
    }
  }
}
</style>
