import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import stroe from './store/index.js'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import '@/assets/main.scss'
import '@/assets/boxicons.min.css'

createApp(App).use(router).use(stroe).mount('#app')

// window.Kakao.init(process.env.VUE_APP_KAKAKO_JS_KEY);