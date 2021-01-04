import { UserConfig } from 'vite'

const { resolve } = require('path')

const i18nTransform = ({ code }) => {
  let resource = JSON.parse(code.trim())
  return `
    export default Component => {
      Component.i18n = ${JSON.stringify(resource || {})}
    }`.trim()
}

const config: UserConfig = {
  optimizeDeps: {
    include: ['flatpickr/dist/l10n/pt.js']
  },
  alias: {
    '/@src/': resolve(__dirname, 'src/'),
  },
  cssPreprocessOptions: {
    scss: {
      additionalData: `
        $tablet-brakepoint: 1024px;
        $mobile-brakepoint: 640px;
      `
    }
  },
  vueCustomBlockTransforms: {
    i18n: i18nTransform
  }
}

export default config
