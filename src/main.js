import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'

import './assets/main.css'

createApp(App)
  .use(PrimeVue)
  .mount('#app')
