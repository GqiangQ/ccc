import { createApp } from 'vue'
import App from './App.vue'


if(!window.__POWERED_BY_QIANKUN__){
  mount({})
}

export async function bootstrap(props) {
  console.log('react app bootstraped', props);
}

export const mount =  async (props)=>{
  console.log('mount', props);
  createApp(App).mount('#app')
}

export const unmount =  async (props)=>{
  console.log("unmount", props);
}