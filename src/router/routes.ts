import HomePage from '@/views/HomeView.vue'
import ProductDetails from '@/views/ProductDetailsView.vue'
import Product from '@/views/ProductsView.vue'
import Cart from '@/views/CartView.vue'
import CategoryView from '@/views/CategoryView.vue'
import MainLayout from '@/layouts/MainLayout.vue'

export const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomePage,
      },
      {
        path: '/login',
        name: 'login',
        component: HomePage,
      },
      {
        path: '/sign-up',
        name: 'sign-up',
        component: HomePage,
      },
    ],
  },

  {
    path: '/products',
    component: MainLayout,
    children: [
      {
        path: '/products',
        name: 'products',
        component: Product,
      },
      {
        path: '/products/:id',
        name: 'products-details',
        component: ProductDetails,
      },
    ],
  },
  {
    path: '/cart',
    component: MainLayout,
    children: [
      {
        path: '/cart',
        name: 'cart',
        component: Cart,
      },
    ],
  },
  {
    path: '/category',
    component: MainLayout,
    children: [
      {
        path: '/category',
        name: 'category',
        component: CategoryView,
      },
    ],
  },
]
