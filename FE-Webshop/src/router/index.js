import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: `/products/:PId`,
      name: 'product',
      component: () => import('../views/ProductDetails.vue')
    },
    {
      path: '/',
      name: 'products',
      component: () => import('../views/Products.vue')
    },

    {
      path:'/Addproduct',
      name: 'Addproduct',
      component: () => import('../views/ProductsCrud/AddProduct.vue')
    },
    {
      path:'/Editproduct/:PId',
      name: 'Editproduct',
      component: () => import('../views/ProductsCrud/EditProduct.vue')
    },
    {
      path:'/Deleteproduct/:PId',
      name: 'Deleteproduct',
      component: () => import('../views/ProductsCrud/DeleteProduct.vue')
    },
    {
      path:'/logout',
      name: 'logout',
      component: () => import('../views/Logout.vue')
    }
    
    
  ]
})

export default router
