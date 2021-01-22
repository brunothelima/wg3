import { defineAsyncComponent } from 'vue'

// Creates a .vue component collection, using their file names template tag ref
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

// Creates a route list based on file structure from glob arguments
export const glob2Routes = (urlPrefix: string, ...args: any) => {
  const routes = []
  const components = glob2Components(...args)
  for (let componentName in components) {
    routes.push({
      path: `${urlPrefix}/${componentName.toLowerCase()}`,
      component: components[componentName]
    })
  }
  console.log(routes);
  return routes
}