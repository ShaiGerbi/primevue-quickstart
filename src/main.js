import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'

import './assets/main.css'

createApp(App)
  .use(PrimeVue)
  .component('Button', Button)
  .mount('#app')
