import { createApp } from 'vue'
import App from './App.vue'
// import VueMeta from 'vue-meta'
import router from './router'

createApp(App)
.use(router)
.mount('#app')
