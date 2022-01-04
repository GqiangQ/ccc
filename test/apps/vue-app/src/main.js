import { createApp } from 'vue'
import App from './App.vue'

export async function bootstrap(props) {
  console.log('react app bootstraped', props);
}

export const mount =  async (props)=>{
  const container = props.container ? props.container.querySelector('#root') : document.getElementById('app')
  createApp(App).mount(container)
}

export const unmount =  async (props)=>{
  console.log("unmount", props);
}

if(!window.__POWERED_BY_QIANKUN__){
  mount({})
}