import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/assets/main.scss'
import '@/assets/boxicons.css'

createApp(App).use(router).mount('#app')