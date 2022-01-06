import { getApps } from './index'

const routerChange = async ()=>{
  const apps = getApps()
  const app = apps.find(item=>window.location.pathname.startsWith(item.activeRule))
  console.log(window.location.pathname, app.entry);
  const html = await fetch(app.entry).then(res=>res.text());
  console.log(html);
  const container = document.querySelector(app.container)
  container.innerHTML = html
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
