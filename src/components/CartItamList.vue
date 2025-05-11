<script setup>
import { inject, computed } from 'vue'
import CartItem from './CartItem.vue'

const { cart: originalCart, removeFromCart } = inject('cart')

// Создаем computed свойство с добавленным quantity
const cart = computed(() => {
  return originalCart.value.map((item) => ({
    ...item,
    quantity: item.quantity || 1, // Добавляем quantity по умолчанию 1
  }))
})

// Функция для обновления количества
const updateQuantity = (item, newQuantity) => {
  const index = originalCart.value.findIndex((cartItem) => cartItem.id === item.id)
  if (index !== -1) {
    originalCart.value[index].quantity = Math.max(1, newQuantity)
  }
}
const handleRemoveItem = (item) => {
  removeFromCart(item) // Убедитесь, что передается ID товара
}
</script>

<template>
  <div
    class="flex flex-col flex-1 gap-4 overflow-y-auto max-h-[calc(100vh-250px)]"
    style="scrollbar-width: none; -ms-overflow-style: none"
    v-auto-animate
  >
    <CartItem
      v-for="item in cart"
      :key="item.id"
      :item="item"
      :title="item.title"
      :price="item.price"
      :image-url="item.imageUrl"
      @update-quantity="updateQuantity"
      @remove-item="handleRemoveItem"
    />
  </div>
</template>

<style scoped>
/* Для WebKit браузеров (Chrome, Safari) */
::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}
</style>
