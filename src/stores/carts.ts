import { defineStore } from 'pinia'
import type { Carts } from '@/types'
import { useUtils } from '@/composables/useUtils'
import { ElMessageBox, ElMessage } from 'element-plus'

export const useCart = defineStore('cart', {
  state: () => ({
    cart: JSON.parse(localStorage.getItem('cartItems') || '[]') as Carts[],
  }),
  getters: {
    getCartItems: (state) => state.cart,
    getTotalPrice: (state) =>
      state.cart.reduce((total, item) => {
        return total + item.quantity * item.price
      }, 0),
    getSelectedTotalPrice: (state) => {
      return state.cart
        .filter((item) => item.selectedItem === true)
        .reduce((total, item) => total + item.quantity * item.price, 0)
    },
  },

  actions: {
    handleAllSelectItem(value: boolean) {
      this.cart = this.cart.map((item) => ({ ...item, selectedItem: value }))
      this.saveCartItemsOnLocalStorage()
    },
    handleSelectedItem(ItemId: string, isSelected = false) {
      const index = this.cart.findIndex((item) => item.id === ItemId)
      if (index !== -1) {
        this.cart[index].selectedItem = isSelected
      }
      this.saveCartItemsOnLocalStorage()
    },
    handleRemoveAllItem() {
      ElMessageBox.confirm(
        'Are you sure you want to remove all the items in the cart?',
        'Warning',
        {
          confirmButtonText: 'Yes',
          cancelButtonText: 'Cancel',
          type: 'warning',
        },
      )
        .then(() => {
          this.cart = []
          this.saveCartItemsOnLocalStorage()
          ElMessage.success('Successfully remove all the items')
        })
        .catch(() => {
          ElMessage.info('Action Cancelled')
        })
    },
    handleAddToCart(cartItem: Carts) {
      const { toastMessage } = useUtils()
      const index = this.cart.findIndex((item: Carts) => item.id === cartItem.id)
      if (index != -1) {
        this.cart[index].quantity += cartItem.quantity
      } else {
        this.cart.push(cartItem)
      }
      this.saveCartItemsOnLocalStorage()
      toastMessage('Success', `${cartItem.label} is added on the cart`, 'success')
    },
    handleRemoveCartItem(ItemId: string) {
      const { toastMessage } = useUtils()
      this.cart = this.cart.filter((item) => item.id !== ItemId)
      toastMessage('Success', `the item has been remove from the cart`, 'success')
      this.saveCartItemsOnLocalStorage()
    },
    handleIncreaseQuantity(id: string) {
      const index = this.cart.findIndex((item) => item.id === id)
      if (index !== -1) {
        this.cart[index].quantity++
      }
      this.saveCartItemsOnLocalStorage()
    },
    handleDecreaseQuantity(id: string) {
      const index = this.cart.findIndex((item) => item.id === id)
      if (index !== -1) {
        this.cart[index].quantity--
      }
      this.saveCartItemsOnLocalStorage()
    },
    handleSetQuantity(id: string, newQuantity: number) {
      const index = this.cart.findIndex((item) => item.id === id)
      if (index !== -1) {
        this.cart[index].quantity = newQuantity
      }
      this.saveCartItemsOnLocalStorage()
    },
    getCartItemsFromLocalStorage() {
      return JSON.parse(localStorage.getItem('cartItems') || '[]') as Carts[]
    },
    saveCartItemsOnLocalStorage() {
      console.log('Saving to localStorage:', JSON.stringify(this.cart))
      localStorage.setItem('cartItems', JSON.stringify(this.cart))
    },
  },
})
