<template>
  <el-card shadow="hover">
    <div class="img-control">
      <router-link :to="props.link">
        <el-image :src="props.image" :alt="props.image" fit="cover" :lazy="true" />
      </router-link>
      <el-button @click="addToCart" color="black" class="top-right" :icon="ShoppingCart" />
    </div>
    <router-link :to="props.link">
      <h1>{{ props.label }}</h1>
      <p>{{ props.description }}</p>
      <p class="price">{{ formattedPrice }}</p>
    </router-link>
  </el-card>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import type { Products } from '@/types'
import { RouterLink } from 'vue-router'
import { useUtils } from '@/composables/useUtils'
import { ShoppingCart } from '@element-plus/icons-vue'
const props = defineProps<Products>()

const { formatPrice, toastMessage } = useUtils()
const formattedPrice = computed(() => formatPrice(props.price))

const addToCart = () => {
  toastMessage('Success', `${props.label} is added to the cart`, 'success')
}
</script>

<style scoped>
h1 {
  font-size: 16px;
}
.top-right {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 18px;
}

.el-image {
  width: 100%;
  height: 200px;
}
a {
  text-decoration: none;
  color: black;
}

.img-control {
  position: relative;
}

a:visited {
  color: black;
}

:deep(.el-card) {
  width: 100%;
}

:deep(.el-input) {
  width: 50px;
}

:deep(.el-input__inner) {
  text-align: center;
}

.button-group {
  display: flex;
  position: absolute;
  bottom: 7px;
  right: 0px;
}

.price {
  color: var(--primary-orange);
  font-weight: bold;
}
</style>
