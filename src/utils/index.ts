import { defineAsyncComponent } from 'vue'

export const glob2Component = (glob: any) => {
  let components: any = {}
  for (let componentPath in glob) {
    let componentName = componentPath.split('/').pop()?.replace('.vue', '') 
    components[`${componentName}`] = defineAsyncComponent(
      () => glob[componentPath]()
    )
  }
  return components
}