import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

const i18nPlugin = {
  name: 'vue-i18n',
  transform(code: string, id: string) {
    if (!/vue&type=i18n/.test(id)) {
      return
    }
    let messages = JSON.parse(code.trim())
    return `export default Comp => {
      Comp.i18n = ${JSON.stringify(messages || {})}
    }`
  }
}

export default defineConfig({
  plugins: [vue(), i18nPlugin],
  alias: [
    { find: '@src', replacement: path.resolve(__dirname, './src') }
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          $tablet-brakepoint: 1024px;
          $mobile-brakepoint: 640px;
        `
      }
    }
  },
  optimizeDeps: {
    include: [
      'flatpickr/dist/l10n/pt.js',
      '@ckeditor/ckeditor5-build-balloon-block/build/translations/pt.js'
    ]
  },
})
