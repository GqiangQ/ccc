type AppPropsType = {

}
type AppType = {
    name: 'app1',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/react',
    props: AppPropsType
}

type HookType = (app: AppType) => Promise<any>
type HooksType = {
  beforeLoad?: HookType;
  beforeMount?: HookType;
  afterMount?: HookType;
  beforeUnmount?: HookType;
  afterUnmount?: HookType;
}

export const init = (apps:AppType[], hooks: HooksType)=>{

}