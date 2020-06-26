import { createApp } from 'vue'
import router from '/@utils/router'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
