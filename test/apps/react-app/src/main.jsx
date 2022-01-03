import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

if(!window.__POWERED_BY_QIANKUN__){
  mount({})
}

export async function bootstrap(props) {
  console.log('react app bootstraped', props);
}

export const mount =  async (props)=>{
  console.log('mount', props);
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

export const unmount =  async (props)=>{
  console.log("unmount", props);
}
