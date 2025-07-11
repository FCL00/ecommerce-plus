<template>
  <the-action-links></the-action-links>
  <header class="header">
    <nav class="navbar">
      <router-link to="/">
        <h1 class="brand-name">Shop+</h1>
      </router-link>
      <search-bar />
      <div class="cart" @click="handleCart()" role="button">
        <el-icon :size="30"><ShoppingCart /></el-icon>
        <p>Cart</p>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import TheActionLinks from './ActionLinks.vue'
import { ShoppingCart } from '@element-plus/icons-vue'
import { useRouter, RouterLink } from 'vue-router'
import SearchBar from './SearchBar.vue'

const router = useRouter()

const handleCart = () => {
  router.push('/cart')
  console.log('cart')
}
</script>

<style scoped>
/* fixed header position */
.header {
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px #e4e4e4 solid;
}

/* navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 1440px;
}

.navbar a {
  text-decoration: none;
  color: #000;
}

/* cart */
.cart {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}
</style>
