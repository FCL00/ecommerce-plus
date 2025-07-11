<template>
  <section id="banner" class="container">
    <base-banner />
  </section>

  <section id="category" class="container">
    <h1>Categories</h1>
    <base-pill v-for="(category, index) in categories" :key="index" :name="category.name" />
  </section>

  <section id="popular-products" class="container">
    <h1>Popular Products</h1>
    <popular-products />
    <product-list :show-all="true" />
  </section>
</template>

<script lang="ts" setup>
import { BaseBanner, BasePill, PopularProducts, ProductList } from '@/components'
import { categories } from '@/models'
// import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'
import { products } from '@/models'

onMounted(() => {
  if (!JSON.parse(localStorage.getItem('products') || `[]`).length) {
    localStorage.setItem('products', JSON.stringify(products))
  }
})
</script>

<style scoped>
#popular-products h1 {
  margin-top: 2rem;
}

#category,
#popular-products {
  padding: 20px;
}

#category,
#popular-products {
  max-width: 1440px;
  margin: 0 auto;
}

#category {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;
  margin: 4px auto;
}

h1 {
  width: 100%;
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>
