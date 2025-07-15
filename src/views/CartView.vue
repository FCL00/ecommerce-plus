<template>
  <div class="grid">
    <!-- LEFT COLUMN: Cart Items -->
    <div class="left-col">
      <div class="flex-between" v-if="cartStore.getCartItems.length > 0">
        <el-checkbox v-model="isSelectedAll" label="Select All" size="large" />
        <el-button :icon="Delete" type="danger" @click="cartStore.handleRemoveAllItem()">
          Delete All
        </el-button>
      </div>

      <el-empty v-if="cartStore.getCartItems.length === 0" description="No Products Found">
        <el-button type="primary">Buy some stuff!</el-button>
      </el-empty>

      <cart-card
        v-for="item in cartStore.getCartItems"
        :key="item.id"
        :id="item.id"
        :label="item.label"
        :value="item.value"
        :quantity="item.quantity"
        :price="item.price"
        :image="item.image"
        :description="item.description"
        :link="item.link"
        :selected-item="item.selectedItem"
        @update:selectedItem="(val) => cartStore.handleSelectedItem(item.id, val)"
      />
    </div>

    <!-- RIGHT COLUMN: Checkout Summary -->
    <div class="checkout-form">
      <el-card shadow="always" body-style="{ padding: '20px' }">
        <h2>Total Price</h2>
        <p class="total-amount">
          {{
            formatPrice(isSelectedAll ? cartStore.getTotalPrice : cartStore.getSelectedTotalPrice)
          }}
        </p>
        <el-button type="primary" size="large" class="checkout-button"> Place Order </el-button>
      </el-card>
    </div>
  </div>

  <!-- <div class="card-list">
    <div class="flex-between" v-if="cartStore.getCartItems.length > 0">
      <el-checkbox v-model="isSelectedAll" label="Select All" size="large" />
      <el-button :icon="Delete" @click="cartStore.handleRemoveAllItem()">Delete</el-button>
    </div>
    <el-empty v-if="cartStore.getCartItems.length === 0" description="No Products Found">
      <el-button>Buy some shit!</el-button>
    </el-empty>
    <cart-card
      v-for="item in cartStore.getCartItems"
      :key="item.id"
      :id="item.id"
      :label="item.label"
      :value="item.value"
      :quantity="item.quantity"
      :price="item.price"
      :image="item.image"
      :description="item.description"
      :link="item.link"
      :selected-item="item.selectedItem"
      @update:selectedItem="(val) => cartStore.handleSelectedItem(item.id, val)"
    />
    <div class="check-out-form">
      <h1>
        Total Price:
        {{ formatPrice(isSelectedAll ? cartStore.getTotalPrice : cartStore.getSelectedTotalPrice) }}
      </h1>
    </div>
  </div> -->
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { CartCard } from '@/components'
import { useCart } from '@/stores/carts'
import { useUtils } from '@/composables/useUtils'
import { Delete } from '@element-plus/icons-vue'

const cartStore = useCart()
const { formatPrice } = useUtils()
const isSelectedAll = ref(false)

watch(isSelectedAll, (newVal) => {
  cartStore.handleAllSelectItem(newVal)
})
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  padding: 20px;
  min-height: 100vh;
  margin-top: 2rem;
}

.left-col {
  overflow-y: auto;
  padding-right: 10px;
}

.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  padding: 8px 20px;
  margin-bottom: 20px;
  background-color: #fff;
}

.checkout-form {
  /* position: sticky; */
  /* top: 20px;
  align-self: start; */
}

.checkout-form h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

.total-amount {
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
}

.checkout-button {
  width: 100%;
  background-color: #000;
}

/* Target the large checkbox inner box */
:deep(.el-checkbox.el-checkbox--large .el-checkbox__inner) {
  height: 24px;
  width: 24px;
  border: 2px solid var(--primary-black);
  background-color: white;
  transition: all 0.3s ease;
  position: relative;
  --el-checkbox-checked-text-color: #000;
}

/* Checked state styles */
:deep(.el-checkbox.el-checkbox--large.is-checked .el-checkbox__inner) {
  background-color: var(--primary-gold);
  border-color: var(--primary-black);
  /* You can add box-shadow or something else here */
}

/* Change the check icon color */
:deep(.el-checkbox.el-checkbox--large.is-checked .el-checkbox__inner::after) {
  border-color: #000;
  position: absolute;
  left: 8px; /* tweak to center */
  top: 3px; /* tweak to center */
  width: 4px; /* bigger width */
  height: 12px; /* bigger height */
  box-sizing: content-box;
  border-width: 0 3px 3px 0; /* this creates the check shape */
}
</style>

<!-- <template>
  <div class="card-list">
    <div class="top-bar" v-if="cartStore.getCartItems.length > 0">
      <el-checkbox
        v-model="isSelectedAll"
        label="Select All"
        size="large"
        class="select-all"
      />
      <el-button
        :icon="Delete"
        type="danger"
        plain
        @click="cartStore.handleRemoveAllItem()"
      >
        Delete
      </el-button>
    </div>

    <el-empty
      v-if="cartStore.getCartItems.length === 0"
      description="No Products Found"
      class="empty-state"
    >
      <el-button type="primary">Buy some stuff!</el-button>
    </el-empty>

    <div class="cart-items">
      <cart-card
        v-for="item in cartStore.getCartItems"
        :key="item.id"
        :id="item.id"
        :label="item.label"
        :value="item.value"
        :quantity="item.quantity"
        :price="item.price"
        :image="item.image"
        :description="item.description"
        :link="item.link"
        :selected="item.selectedItem"
        @update:selectedItem="(val) => cartStore.handleSelectedItem(item.id, val)"
      />
    </div>

    <div class="check-out-form" v-if="cartStore.getCartItems.length > 0">
      <h2 class="checkout-text">
        Total Price:
        <span class="price-amount">
          {{ formatPrice(isSelectedAll ? cartStore.getTotalPrice : cartStore.getSelectedTotalPrice) }}
        </span>
      </h2>
      <el-button type="primary" size="large">Place Order</el-button>
    </div>
  </div>
</template> -->

<!-- styles
.card-list {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.select-all {
  font-weight: 500;
  font-size: 16px;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.check-out-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #eaeaea;
}

.checkout-text {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.price-amount {
  color: var(--primary-gold);
  margin-left: 8px;
}

.empty-state {
  text-align: center;
  margin-top: 60px;
}




-->
