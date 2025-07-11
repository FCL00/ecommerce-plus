<template>
  <section class="container">
    <h1>Just For you</h1>
    <div class="product-list">
      <product-card
        v-for="product in products.slice(0, loadMore)"
        :key="product.id"
        :id="product.id"
        :name="product.label"
        :price="product.price"
        :image="product.image"
        :description="product.description"
        :link="product.link"
        :value="product.value"
        :label="product.label"
        :category="product.category"
        :subcategory="product.subcategory"
      />
      <el-empty v-if="!products.length" description="No Products Found" />
    </div>

    <div class="center" v-if="loadMore !== products.length">
      <router-link v-if="props.showAll" to="/products"> View All Products </router-link>
      <el-button v-if="!props.showAll" @click="loadMore += 8">LOAD MORE</el-button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ProductCard } from '@/components'
import { useProducts } from '@/stores/products'
import { reactive, ref, defineProps } from 'vue'
import type { Products } from '@/types'
import { ElButton, ElEmpty } from 'element-plus'

// productlist props
const props = defineProps({
  showAll: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const loadMore = ref(12)

const productStore = useProducts()

const products = reactive<Products[] | []>(productStore.products)
</script>

<style scoped>
.center {
  margin: 4rem 0px;
  display: flex;
  justify-content: center;
}
h1 {
  width: 100%;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 2rem;
}

.heading {
  font-size: 24px;
  margin-bottom: 1rem;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 products per row by default */
  gap: 20px; /* Spacing between items */
  max-width: 1440px;
  margin: 0 auto;
}

.el-button,
a {
  /* background-color: var(--primary-black);
  color: white; */
  text-decoration: none;
  color: black;
  border: 1px black solid;
  padding: 20px;
  border-radius: 4px;
}

.el-button:hover {
  background-color: black;
  color: white;
}

@media (max-width: 1024px) {
  .product-list {
    grid-template-columns: repeat(3, 1fr); /* 3 products per row on tablets */
  }
}

@media (max-width: 768px) {
  .product-list {
    grid-template-columns: repeat(2, 1fr); /* 2 products per row on mobile */
  }
}

@media (max-width: 480px) {
  .product-list {
    grid-template-columns: 1fr; /* 1 product per row on very small screens */
  }
}
</style>
