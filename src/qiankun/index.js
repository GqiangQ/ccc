import router from './router'
let _apps = []
export const registerMicroApps = (apps)=>{
  console.log(apps);
  _apps = apps
}

export const getApps = ()=> _apps;
// window.history.replaceState = (...props)=>{
//   _pushReplace.apply(window.history, ...props)
//   console.log('pushState');

// };


export const start = ()=>{
  router()

}

