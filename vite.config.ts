import { UserConfig } from 'vite'

const i18nTransform = (source: string = '{}') => {
  let resource = JSON.parse(source.trim())
  return `
    export default Component => {
      Component.i18n = ${JSON.stringify(resource || {})}
    }`.trim()
}

const config: UserConfig = {
  alias: {
    '/@composables/': require('path').resolve(__dirname, 'src/composables')
  },
  vueCustomBlockTransforms: {
    i18n: i18nTransform
  }
}

export default config
