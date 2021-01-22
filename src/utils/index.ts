import { defineAsyncComponent } from 'vue'

const capitalize = (s: string) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const glob2Components = (...args: any) => {
  const components: any = {}
  let globs = Object.assign({}, ...args)

  for (let componentPath in globs) {
    let componentName = componentPath.split('/').pop()?.replace('.vue', '') 
    
    if (Object.keys(components).includes('index')) {
      componentName = componentPath.split('/')[componentPath.split('/').length - 2]
    }
    
    componentName = componentName?.replace('.vue', '')
    components[`${componentName}`] = defineAsyncComponent(
      () => globs[componentPath]()
    )
  }
  return components
}

export const glob2Routes = (indexPath: string, ...args: any) => {
  const components = glob2Components(...args)
  const routes: any = {
    path: indexPath,
    component: components.index,
    children: []
  }

  for (let componentName in components) {
    routes.children.push({
      path: `${indexPath}/${componentName.toLowerCase()}`,
      component: components[componentName]
    })
  }

  return routes
}