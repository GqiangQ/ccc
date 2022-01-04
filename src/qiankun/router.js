import { getApps } from './index'

const routerChange = ()=>{
  const apps = getApps()
  const app = apps.find(app=>window.location.pathname.startsWith(app.activeRule))
  console.log(app);
}

export default ()=>{
const _pushState = window.history.pushState
const _pushReplace = window.history.replaceState

window.addEventListener('popstate', routerChange)

// window.addEventListener('pushState', function(e) {
//   console.log('change pushState');
// });

window.history.pushState = (...props)=>{
  // _pushState.apply(window.history, props)
  // console.log('pushState');
  // routerChange(props)
};

window.history.replaceState = (...props)=>{
  _pushReplace.apply(window.history, props)
  console.log('replaceState');
  routerChange(props)
};
}
