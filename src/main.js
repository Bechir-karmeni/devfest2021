import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Header from './components/Header'
import Footer from './components/Footer'
import Popup from './components/Popup'

const app = createApp(App)
app.use(store)
app.use(router)

app.component('app-header',Header)
app.component('app-footer',Footer)
app.component('app-popup', Popup)
app.mount('#app')