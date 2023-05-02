<template>
  <div class="cm-search-panel" @keydown.tab="pressTab">
    <!-- 重构搜索组件
			1.留下icon插槽？还是封装进去
		 -->
    <div class="cm-icon-panel">
      <span :class="['iconfont', currentIcon]"></span>
    </div>

    <div class="cm-input-main">
      <input
        @blur="changePosition"
        @keydown.down="selectedNext"
        @keydown.up="selectedUp"
        v-model="inputValue"
        @keydown.enter="toSearch"
        @input="checkInputValue"
        autofocus
        :class="['cm-input-instance', textPosition]"
        placeholder="相信美好的事情将会发生" />
    </div>

    <div v-if="inputValue" class="association-list">
      <List
        have-border
        ref="mylist"
        @selectedInputValue="changeInputValueBySelected"
        :content="associationContent"></List>
    </div>
  </div>
</template>

<!-- jsonp请求 config{TODO 搜索引擎名称,sugUrl,sugContent}-->
<script>
window.getAssociation = (config) => {
  let { sugUrl, sugContent } = config

  sugUrl = sugUrl.replace('#content#', sugContent)
  //动态添加JS脚本
  let script = document.createElement('script')
  script.src = sugUrl
  document.getElementsByTagName('head')[0].appendChild(script)
}
</script>

<script setup>
import { ref } from 'vue'
import { GOOGLE_ASSOCAITION_URL, BING_ASSOCAITION_URL, BAIDU_ASSOCAITION_URL } from '@/constant/sugConstant.js'
import SEARCH_API from '../../constant/searchUrl'
const emit = defineEmits()

//拿到list组件暴露出来的值
const mylist = ref()

// 给父组件传递inputValue和搜索引擎名称 来生成联想词
let inputValue = ref()

//jsonp 请求的拿到联想词结果
let associationContent = ref()

//默认选中的List为没有
let currentListIndex = ref(-1)

// 当前搜索引擎Url
let currentEngineUrl = GOOGLE_ASSOCAITION_URL
// 切换icon图标常量
const ICON_NAME = {
  google: 'icon-guge',
  baidu: 'icon-baidu-fill',
  bing: 'icon-bing',
}

// 当前选择的搜索引擎名称
let currentIcon = ref(ICON_NAME.google)

// input placeholder 占位符位置
let textPosition = ref('center')

const toSearch = () => {
  if (inputValue) {
    switch (currentIcon.value) {
      case ICON_NAME.google:
        window.location.href = SEARCH_API.GOOGLE_URL + inputValue.value
        break
      case ICON_NAME.baidu:
        window.location.href = SEARCH_API.BAIDU_URL + inputValue.value
        break
      case ICON_NAME.bing:
        window.location.href = SEARCH_API.BING_URL + inputValue.value
        break
    }
  }
}

/**
 * description: 监听子组件选择联想词 , 并同步当前联想词index
 * author: baozi
 * @param: {Object} index 联想词索引 item 联想词值
 * @createTime: 2022-11-28 12:05:54
 */
const changeInputValueBySelected = (config) => {
  currentListIndex.value = config.index
  inputValue.value = config.item
}

/*
 * @Description: 键盘下移选择联想词
 * @Author: baozi
 * @Date: 2022-12-06 13:04:26
 */
const selectedNext = () => {
  // 当小于联想词长度时改变
  if (currentListIndex.value < associationContent.value.length - 1) {
    // 选中把 index传递给子组件
    currentListIndex.value++
    mylist.value.selectedIndex = currentListIndex.value
    inputValue.value = associationContent.value[currentListIndex.value]
  }
}

/*
 * @Description: 键盘上移选择联想词
 * @Author: baozi
 * @Date: 2022-12-06 13:04:45
 */
const selectedUp = () => {
  // 如果不是小于0改变
  if (currentListIndex.value > 0) {
    currentListIndex.value--
    mylist.value.selectedIndex = currentListIndex.value
    inputValue.value = associationContent.value[currentListIndex.value]
  }
}

/**
 * description: 百度联想回调函数
 * author: baozi
 * @createTime: 2022-11-19 20:12:31
 */
window.baidu = {
  sug: (res) => {
    associationContent.value = res.s
  },
}

/**
 * description: 谷歌联想回调函数
 * author: baozi
 * @createTime: 2022-11-19 20:12:31
 */
window.google = {
  sug: (res) => {
    let resArray = []
    let handledArray = []
    for (let index in res[1]) {
      resArray.push(res[1][index][0])
    }
    // 处理返回的个数
    if (resArray.length > 8) {
      for (let index = 0; index < 8; index++) {
        handledArray.push(resArray[index])
      }
    }
    associationContent.value = handledArray
  },
}

/**
 * description: 必应联想回调函数
 * author: baozi
 * @createTime: 2022-11-19 20:12:31
 */
window.bing = {
  sug: (res) => {
    let resArray = []
    let unhandleArray = res.AS.Results
    for (let index in unhandleArray) {
      for (let tindex in unhandleArray[index].Suggests) {
        resArray.push(unhandleArray[index].Suggests[tindex].Txt)
      }
    }
    associationContent.value = resArray
  },
}

/**
 * description: 按下TAB键盘 切换图标同时切换搜索引擎 同时将搜索引擎name传递给父组件
 * description: 切换搜索引擎前需要把content的值给清空
 * author: baozi
 * @createTime: 2022-11-15 15:30:43
 * TODO 待优化
 */
const pressTab = () => {
  // 切换搜索引擎清空联想词，并且将联想词的index复原
  associationContent.value = []
  if (inputValue.value) {
    currentListIndex.value = -1
    mylist.value.selectedIndex = currentListIndex.value
  }
  if (currentIcon.value == ICON_NAME.google) {
    currentIcon.value = ICON_NAME.baidu
    currentEngineUrl = BAIDU_ASSOCAITION_URL
  } else if (currentIcon.value == ICON_NAME.baidu) {
    currentIcon.value = ICON_NAME.bing
    currentEngineUrl = BING_ASSOCAITION_URL
  } else {
    currentIcon.value = ICON_NAME.google
    currentEngineUrl = GOOGLE_ASSOCAITION_URL
  }
}

/**
 * description: 阻止alt+tab引发的bug
 * author: baozi
 * TODO 似乎已解决
 */
const prevent = () => {}

/**
 * description: 原生js 阻止浏览器默认按下tab切换
 * author: baozi
 * TODO 出现alt加tab bug
 */
document.onkeydown = (event) => {
  let code = event.keyCode
  if (code == 9) {
    event.preventDefault()
  }
}

/**
 * description: 检查是否input框中是否有输入，发送jsonp请求
 * author: baozi
 */
const checkInputValue = (event) => {
  if (event) {
    textPosition.value = 'left'
  }
  //发送jsonp请求,并清空内容
  const config = {
    sugUrl: currentEngineUrl,
    sugContent: inputValue.value,
  }
  if (inputValue.value) {
    window.getAssociation(config)
  }
}

/**
 * description: 失去焦点改变位置
 * author: baozi
 */
const changePosition = () => {
  if (!inputValue.value) {
    textPosition.value = 'center'
  }
}

/**TODO
 * description: 阻止输入框上下的默认行为
 * author: baozi
 * @createTime: 2022-11-27 22:12:34
 */
const preventDownAndUp = () => {
  console.log('PreventIng')
}
</script>

<style lang="less">
// 动态css
.left {
  text-align: left;
}

.center {
  text-align: center;
}

.cm-search-panel {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 5px;
  width: 40vw;
  align-items: center;

  .cm-icon-panel {
    border-top-left-radius: 5px;
    padding: 8px;
    background-color: var(--bg-grey-3);
    span {
      font-size: 30px;
    }
  }

  .cm-input-main {
    padding-left: 3px;
    border: 1px solid var(--bg-grey-3);
    background-color: var(--bg-grey-3);

    .cm-input-instance {
      width: 25vw;
      height: 44px;
      padding-left: 8px;
      font-size: 18px;
      line-height: 100%;
      border-style: none;
    }
  }
  .association-list {
    border: 1px solid var(--bg-grey-3) ;
    border-radius: 0 0 10px 10px;
  }
}

.cm-input-instance:focus {
  outline: none;
}
</style>
