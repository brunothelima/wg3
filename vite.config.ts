import { UserConfig } from 'vite'

const { resolve } = require('path')

const i18nTransform = (source: string = '{}') => {
  let resource = JSON.parse(source.trim())
  return `
    export default Component => {
      Component.i18n = ${JSON.stringify(resource || {})}
    }`.trim()
}

const config: UserConfig = {
  alias: {
    // '/@src/': resolve(__dirname, 'src'),
    '/@assets/': resolve(__dirname, 'src/assets'),
    '/@components/': resolve(__dirname, 'src/components'),
    '/@composables/': resolve(__dirname, 'src/composables'),
    '/@utils/': resolve(__dirname, 'src/utils'),
    '/@pages/': resolve(__dirname, 'src/pages'),
    '/@types/': resolve(__dirname, 'src/types')
  },
  vueCustomBlockTransforms: {
    i18n: i18nTransform
  }
}

export default config
