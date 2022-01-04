import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Page1 from './pages/page1.vue';
import Page2 from './pages/page2.vue';


import { registerMicroApps, start } from '../src/qiankun/index';

registerMicroApps([
  {
    name: 'app1',
    entry: '//localhost:3001',
    container: '#container',
    activeRule: '/app1',
  },
  {
    name: 'app2',
    entry: '//localhost:3002',
    container: '#container',
    activeRule: '/app2',
  }
]);
// 启动 qiankun
start();

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path: '/app1',
      component: Page1
    },
    {
      path: '/app2',
      component: Page2
    }
  ]
})

const app = createApp(App)
app.use(router);
app.mount('#app')
