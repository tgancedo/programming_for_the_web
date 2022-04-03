import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue';
import CollectionDetails from '../views/CollectionDetails.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // default path for home page
      name: "home",
      component: Home
    },
    {
      path: '/collection/:id', // book detail page
      name: 'collection-details',
      component: CollectionDetails
    }
  ]
})

export default router
