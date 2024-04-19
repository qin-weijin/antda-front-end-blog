import { createApp } from 'vue'
import App from './App.vue'
// Antd
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
// VueFullPage
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

// Router
import router from '@/router'

// unocss
import '@unocss/reset/normalize.css'
import 'virtual:uno.css'
// Style
import './style.css'

const app = createApp(App)
app.use(Antd)
app.use(router)
app.use(VueFullPage)
app.mount('#app')