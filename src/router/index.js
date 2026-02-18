import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Wiki from '../pages/Wiki.vue'
import Source from '../pages/Source.vue'
import Download from '../pages/Download.vue'
import Contributors from '../pages/Contributors.vue'
import About from '../pages/About.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/wiki', name: 'Wiki', component: Wiki },
  { path: '/source', name: 'Source', component: Source },
  { path: '/download', name: 'Download', component: Download },
  { path: '/contributors', name: 'Contributors', component: Contributors },
  { path: '/about', name: 'About', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
