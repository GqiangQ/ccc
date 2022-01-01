type AppPropsType = {

}
type AppType = {
    name: string,
    entry: string,
    container: string | Element,
    activeRule: string,
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