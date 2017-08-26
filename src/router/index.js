import VueRouter from 'vue-router'

//Import components for rendering
import LandingPage from '../components/LandingPage.vue'
import Home from '../components/Home.vue'

//Import vuex store
import { store } from '../store'

//Import Authentication Guard
import AuthGuard from './authGuard'

const routes = [
  //  Register routes
  {
    path: '/',
    component: LandingPage ,
    beforeEnter: (to, from, next) => {
      if(store.getters.getUserData)
        next('/home')
      else
        next()
    }
  },
  { path: '/home',  component: Home, beforeEnter: AuthGuard },
  { path: '/home/add',  component: LandingPage, beforeEnter: AuthGuard },
  { path: '/profile',  component: LandingPage, beforeEnter: AuthGuard },
]

export const router = new VueRouter({
  mode: 'history',
  routes
})