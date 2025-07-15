import HomePage from '@/views/HomeView.vue'
import ProductDetails from '@/views/ProductDetailsView.vue'
import Product from '@/views/ProductsView.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import CartView from '@/views/CartView.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'home',
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
      {
        path: '/cart',
        name: 'cart',
        component: CartView,
      },
    ],
  },
]

export default routes
