import { defineAsyncComponent } from 'vue'

/**
 * This function will return a component collection from the
 * imported meta glob/globEager lists passed as ...args.
 * 
 * For example:
 * 
 * const components = glob2Components(
 *   import.meta.globEager('./pages/static/**.vue),
 *   import.meta.glob('./examples/async/**.vue),
 *   ...
 * )
 * 
 * console.log(components)
 * 
 * {
 *   'PageStaticA': PageStaticA,
 *   'PageStaticB': PageStaticB,
 *    ...
 *   'PageAsyncA': Promise<PageAsyncA>,
 *   'PageAsyncB': Promise<PageAsyncB>
 *    ...
 * }
 *
 */
export const glob2Components = (...args: any) => {
  let collection: any = {}
  // Combining the impot.meta.glob/globEager lists
  let globs = Object.assign({}, ...args) 

  for (let componentPath in globs) {
    let componentName = componentPath.split('/').pop()?.replace('.vue', '') 

    // Gives the folder name to any component found at the folder/index.vue file
    if (Object.keys(collection).includes('index')) {
      componentName = componentPath.split('/')[componentPath.split('/').length - 2]
    }

    /**
     * Here we identify the async component and execute its own import function 
     * before adding it to the component collection
     */
    if (typeof globs[componentPath] === 'function') {
      collection[`${componentName}`] = defineAsyncComponent(
        () => globs[componentPath]()
      )
      continue
    }
    
    // Adding the static components to the component collection
    collection[`${componentName}`] = globs[componentPath].default
  }

  return collection
}

/**
 * This function will return a route array based on the given
 * glob lists components paths, prefixed by its first argument.
 * 
 * For example:
 * 
 * const routes = glob2Routes(
 *   '/super-discount/', 
 *   import.meta.globEager('./Shoes/**.vue'),
 *   import.meta.glob('./Pants/**.vue'),
 * )
 * 
 * console.log(routes)
 * 
 * [
 *  { path: '/super-discount/shoes-a', component: ShoesA },
 *  { path: '/super-discount/shoes-b', component: ShoesB },
 *  ...
 *  { path: '/super-discount/pants-a', component: Promise<PantsA> },
 *  { path: '/super-discount/pants-b', component: Promise<PantsB> },
 *  ...
 * ]
 * 
 */
export const glob2Routes = (routePrefix: string, ...args: any) => {
  const components = glob2Components(...args)
  const routes = []

  for (let componentName in components) {    
    let routeSufix = componentName.replace(/([a-z])([A-Z])/g, '$1 $2')
    routeSufix = routeSufix.replace(' ', '-').toLowerCase()

    routes.push({
      path: `${routePrefix}/${routeSufix}`,
      component: components[componentName]
    })
  }

  return routes
}