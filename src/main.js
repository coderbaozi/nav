import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import TDesign from 'tdesign-vue-next';
import '@/assets/icon/iconfont.css'
import Request from '@/utils/Request';
import search from '@/components/search.vue'
import Time from '@/components/Time.vue'
// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';
const app = createApp(App);
app.use(router);
app.use(TDesign);
app.component('Time',Time);
app.component('search',search);
app.config.globalProperties.Request=Request;
app.mount('#app');

