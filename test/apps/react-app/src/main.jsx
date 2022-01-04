import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

export async function bootstrap(props) {
  console.log('react app bootstraped', props);
}

export const mount =  async (props)=>{
  const container = props.container ? props.container.querySelector('#root') : document.getElementById('root')
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,container)
}

export const unmount =  async (props)=>{
  console.log("unmount", props);
}


if(!window.__POWERED_BY_QIANKUN__){
  mount({})
}
