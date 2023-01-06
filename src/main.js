import { createApp } from 'vue'
import './style.css'
import app from './app.vue'
import route from './route'

const vue = createApp(app)
vue.use(route)
vue.mount('#app')
