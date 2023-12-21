import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import VerusView from '../views/VerusView.vue';
import ConnectViewVue from '@/views/ConnectView.vue';
import PortfolioViewVue from '@/views/PortfolioView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/verus',
    name:'verus',
    component: VerusView
  },
  {
    path:'/connect',
    name:'connect',
    component: ConnectViewVue
  },
  {
    path:'/portfolio',
    name:'portfolio',
    component: PortfolioViewVue
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
