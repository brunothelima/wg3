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
    '/@src/': require('path').resolve(__dirname, 'src'),
    '/@assets/': require('path').resolve(__dirname, 'src/assets'),
    '/@components/': require('path').resolve(__dirname, 'src/components'),
    '/@composables/': require('path').resolve(__dirname, 'src/composables'),
    '/@lib/': require('path').resolve(__dirname, 'src/lib'),
    '/@pages/': require('path').resolve(__dirname, 'src/pages'),
    '/@types/': require('path').resolve(__dirname, 'src/types')
  },
  vueCustomBlockTransforms: {
    i18n: i18nTransform
  }
}

export default config
