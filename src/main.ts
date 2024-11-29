import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'


import ECharts from 'vue-echarts'
import 'echarts'

const app = createApp(App)
app.component('v-chart', ECharts)
app.mount('#app')
