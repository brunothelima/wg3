// import { UserConfig } from 'vite'

// const { resolve } = require('path')

// const i18nTransform = ({ code }) => {
//   let resource = JSON.parse(code.trim())
//   return `
//     export default Component => {
//       Component.i18n = ${JSON.stringify(resource || {})}
//     }`.trim()
// }

// const config: UserConfig = {
//   optimizeDeps: {
//     include: ['flatpickr/dist/l10n/pt.js']
//   },
//   cssPreprocessOptions: {
//     scss: {
//       additionalData: `
//         $tablet-brakepoint: 1024px;
//         $mobile-brakepoint: 640px;
//       `
//     }
//   },
  
//   alias: {
//     'wg3/assets/': resolve(__dirname, 'src/assets'),
//     'wg3/components/': resolve(__dirname, 'src/components'),
//     'wg3/composables/': resolve(__dirname, 'src/composables'),
//     'wg3/utils/': resolve(__dirname, 'src/utils'),
//     'wg3/pages/': resolve(__dirname, 'src/pages'),
//     'wg3/types/': resolve(__dirname, 'src/types/index.ts')
//   },
//   vueCustomBlockTransforms: {
//     i18n: i18nTransform
//   }
// }

// export default config
