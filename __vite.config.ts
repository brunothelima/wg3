// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// const { resolve } = require('path')

// const i18nPlugin = {
//   name: 'vue-i18n',
//   transform(code: string, id: string) {
//     if (!/vue&type=i18n/.test(id)) {
//       return
//     }
//     return `export default Comp => {
//       Comp.i18n = ${JSON.stringify(code || {})}
//     }`
//   }
// }

// export default defineConfig({
//   plugins: [vue(), i18nPlugin],
//   alias: {
//     '@src/': resolve(__dirname, './src'),
//   },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `
//           $tablet-brakepoint: 1024px;
//           $mobile-brakepoint: 640px;
//         `
//       }
//     }
//   },
//   optimizeDeps: {
//     include: ['flatpickr/dist/l10n/pt.js']
//   },
// })
