import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'

import Home from './pages/Home.vue'
// import Favorites from './pages/Favorites.vue'
import Landing from './pages/Landing.vue'
import Privacy from './pages/Privacy.vue'

const app = createApp(App)

const routes = [
  { path: '/catalog', name: 'Home', component: Home },
  // { path: '/favorites', name: 'Favorites', component: Favorites },
  { path: '/privacy', name: 'Privacy', component: Privacy },
  { path: '/', name: 'Landing', component: Landing, meta: { noLayout: true }}
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.use(autoAnimatePlugin)

app.mount('#app')
