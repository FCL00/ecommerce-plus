<template>
  <el-form class="form" @submit.prevent="handleSearch()">
    <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearch"
      :trigger-on-focus="false"
      clearable
      class="inline-input w-50"
      placeholder="Search in Shop Chops"
      @select="handleSelect"
      popper-class="custom-autocomplete"
    >
      <template #default="{ item }">
        <div class="autocomplete-item">
          <img :src="item.image" alt="product" class="product-img" />
          <span>{{ item.label }}</span>
        </div>
      </template>
    </el-autocomplete>
    <el-button :icon="Search" native-type="submit" />
  </el-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
import { products as productItems } from '@/models'
import type { Products } from '@/types'
import { useRouter } from 'vue-router'
import type { AutocompleteFetchSuggestionsCallback } from 'element-plus'

const state = ref('')
const router = useRouter()

const products = ref<Products[]>(productItems)

const querySearch = (queryString: string, cb: AutocompleteFetchSuggestionsCallback) => {
  const results = queryString ? products.value.filter(createFilter(queryString)) : products.value
  // call callback function to return suggestions
  cb(results)
}

const createFilter = (queryString: string) => {
  return (product: Products) => {
    return product.label.toLowerCase().includes(queryString.toLowerCase())
  }
}

const handleSelect = (item: Record<string, any>) => {
  if (item.link) {
    router.push(item.link)
  }
}

const handleSearch = () => {
  ElMessage.success('searching')
}
</script>

<style scoped>
.el-form {
  display: flex;
}

:deep(.el-input) {
  width: 500px;
  height: 50px;
  --el-input-focus-border-color: var(--primary-black);
  --el-input-border-color: #000;
}

.el-button {
  height: 50px;
  background-color: var(--primary-black);
  color: white;
  --el-button-focus-border-color: var(--primary-black);
  --el-button-active-border-color: #666666;
}

/* show image on search input */
.autocomplete-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
}

.product-img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .el-form {
    display: none;
  }
}
</style>
