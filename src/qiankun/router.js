import importHTML from './importHTML';
import { getApps } from './index'

const routerChange = async ()=>{
  const apps = getApps()
  const app = apps.find(item=>window.location.pathname.startsWith(item.activeRule))
  console.log(window.location.pathname, app.entry);
  const { template, execScripts }  = await importHTML(app.entry)
  const container = document.querySelector(app.container)
  container.appendChild(template)
  execScripts()
}

export default ()=>{
// const _pushState = window.history.pushState
const _pushReplace = window.history.replaceState

window.addEventListener('popstate', routerChange)

// window.addEventListener('pushState', function(e) {
//   console.log('change pushState');
// });

// window.history.pushState = (...props)=>{
//   // _pushState.apply(window.history, props)
//   // console.log('pushState');
//   // routerChange(props)
// };

window.history.replaceState = (...props)=>{
  _pushReplace.apply(window.history, props)
  // console.log('replaceState');
  setTimeout(routerChange,0)
  // routerChange(props)
};
}
