 const Ajax = async (url) => await fetch(url).then(res=>res.text())
 
 const importHTML = async (url) =>{
  const template = document.createElement('div');
  const html = await fetch(url).then(res=>res.text());
  template.innerHTML = html
  console.log(template);
  const scripts = Array.from(template.querySelectorAll('script')) 
  const getExternalScript = () =>{
    return Promise.all(scripts.map(script=>{
      const src = script.getAttribute('src')
      if(!src){
        return Promise.resolve(script.innerHTML)
      }
      console.log(src.startsWith('http')?src : `${url}${src}`);
      return Ajax(src.startsWith('http')?src : `${url}${src}`)
    }))
  }

  const execScripts = async () => {
    const scriptsCode = await getExternalScript()
    console.log(scriptsCode);
    scriptsCode.forEach(code=>{
      eval(code)
    })

  }
  return {
    template,
    scripts,
    getExternalScript,
    execScripts
  }
}

export default importHTML