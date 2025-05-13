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
  {
    path: '/catalog',
    name: 'Home',
    component: Home,
    meta: { title: 'Каталог продуктов | ООО "Гимед"' },
  },
  // { path: '/favorites', name: 'Favorites', component: Favorites },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy,
    meta: { title: 'Политика конфиденциальности | ООО "Гимед"' },
  },
  { path: '/', name: 'Landing', component: Landing, meta: { title: 'Главная | ООО "Гимед"' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

app.use(router)
app.use(autoAnimatePlugin)

app.mount('#app')
