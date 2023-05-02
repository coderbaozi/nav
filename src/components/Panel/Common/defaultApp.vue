<script setup>
const props = defineProps({
  icon:String,
  name:String,
  url:String
})
</script>

<template>
  <div class="cm-app-panel">
    <img class="img" :src="props.icon" alt="none" />
    <p>{{ props.name }}</p>
  </div>
</template>

<style lang="less">
.cm-app-panel {
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  .img {
    border-radius: 10px;
    width: 60px;
    height: 60px;
  }
}
.cm-app-panel:hover {
  transform: scale(1.2);
  transition: all 0.3s;
  cursor: pointer;
}
</style>