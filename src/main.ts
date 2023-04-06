import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './Route';
import axios from 'axios'
import VueAxios from 'vue-axios'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import store from "./store";

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)
    .use(vuetify)
    .use(router)
    .use(store)
    .use(VueAxios, axios)
    .mount('#app')
