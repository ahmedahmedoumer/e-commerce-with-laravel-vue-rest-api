import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@headlessui/vue'
import './axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

createApp(App).
use(store).
use(router).
use(BootstrapIconsPlugin).
mount('#app')