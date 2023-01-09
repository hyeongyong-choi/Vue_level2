import { createApp } from 'vue'
import App from './App.vue'
import demoStore from './store.js/demoStore'
import store from './store.js/store'

createApp(App).use(store).mount('#app');
