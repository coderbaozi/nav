<template>
  <div class="cm-radio-panel">
    <div class="cm-radio-instance">
      <label @click="changeActive">
        <input class="cm-radio-item" name="option" value="light" v-model="mode" type="radio" />
        <div class="cm-radio-content">
          <div :class="['cm-radio-icon-panel', mode == 'light' ? 'checked' : '']">
            <icon-light class="cm-icon-instance"></icon-light>
          </div>
        </div>
      </label>
      <label @click="changeActive">
        <input class="cm-radio-item" name="option" value="dark" v-model="mode" type="radio" />
        <div class="cm-radio-content">
          <div :class="['cm-radio-icon-panel', mode == 'dark' ? 'checked' : '']">
            <icon-dark class="cm-icon-instance"></icon-dark>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<script setup>
import iconLight from '@/assets/icon/svg/Sun.svg'
import iconDark from '@/assets/icon/svg/Moon.svg'
import { ref } from 'vue'
let mode = ref('light')
let active = ref(false)
const changeActive = () => {
  if (mode.value === 'light') {
    active.value = true
  }
}
</script>

<style scoped lang="less">
.checked {
  background-color: var(--bg-white-3);
  box-shadow: 0px 0px 5px var(--bg-grey-4), 0px 0px 10px var(--bg-white-2);
}
.cm-radio-panel {
  background-color: var(--bg-white-1);
  border-radius: 5px;
  padding: 0.8px;

  .cm-radio-instance {
    display: flex;

    .cm-radio-item {
      display: none;
    }
    .cm-radio-content {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--bg-white-1);
      width: 30px;
      height: 32px;
      border-radius: 5px;

      .cm-radio-icon-panel {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 26px;
        height: 28px;
        border-radius: 3px;
        .cm-icon-instance {
          width: 18px;
          height: 18px;
        }
      }
    }
  }
}
</style>
