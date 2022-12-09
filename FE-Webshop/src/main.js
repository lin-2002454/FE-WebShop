import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import { createAuth0 } from '@auth0/auth0-vue';



const app = createApp(App)

app.use(router)
app.use(createAuth0({
    domain: "dev-hel4g1y4b3yp2ana.us.auth0.com",
    client_id: "PrDirjypWJTk9YQCnaWXD6PnFbgMK08b",
    redirect_uri: window.location.origin
  }));

app.mount('#app')
