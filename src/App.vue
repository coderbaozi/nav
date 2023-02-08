<template>
  <!-- <button @click="youdaoTest">触发</button> -->
  <!-- 路由出参 -->
  <router-view></router-view>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { youdaoTranslate } from './service/translate/translate';
function youdaoTest(){
  let res = youdaoTranslate('你好')
  console.log(res);
}

</script>

<style scoped>
</style>
