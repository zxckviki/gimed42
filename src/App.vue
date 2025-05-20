<script setup>
import { ref, watch, provide, computed } from 'vue'
import Header from './components/Header.vue'
import Drawer from './components/Drawer.vue'

/* Корзина */
const cart = ref([])
const drawerOpen = ref(false)

// Исправленное вычисление общей суммы с учетом количества
const totalPrice = computed(() => {
  return cart.value.reduce((acc, item) => {
    return acc + item.price * (item.quantity || 1)
  }, 0)
})

const closeDrawer = () => {
  drawerOpen.value = false
}

const openDrawer = () => {
  drawerOpen.value = true
}

const addToCart = (item) => {
  cart.value.push({ ...item, quantity: 1 }) // Добавляем quantity по умолчанию
  item.isAdded = true
}

const removeFromCart = (item) => {
  // Удаляем по ID для надежности
  const index = cart.value.findIndex((cartItem) => cartItem.id === item.id)
  if (index !== -1) {
    cart.value.splice(index, 1)
  }

  // Не нужно вручную устанавливать item.isAdded = false,
  // так как watch(cart) в Home.vue уже обновит состояние
}

const updateQuantity = (item, newQuantity) => {
  const cartItem = cart.value.find((cartItem) => cartItem.id === item.id)
  if (cartItem) {
    cartItem.quantity = Math.max(1, newQuantity) // Не меньше 1
  }
}

watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  },
  { deep: true },
)

provide('cart', {
  cart,
  closeDrawer,
  openDrawer,
  addToCart,
  removeFromCart,
  updateQuantity,
  totalPrice,
})
</script>

<template>
  <div id="top" class="absolute top-0"></div>
  <a
    href="#top"
    class="fixed bottom-4 md:bottom-8 right-4 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-[#08546a]/90 hover:bg-[#084c7] active:scale-105 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 z-[9999]"
    aria-label="Наверх"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 md:h-6 md:w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
    </svg>
  </a>
  <template v-if="$route.path !== '/'">
    <header>
      <div class="main-layout">
        <Drawer v-if="drawerOpen" :totalPrice="totalPrice" />
        <div class="bg-white w-full md:w-4/5 m-auto rounded-xl shadow-xl mt-4 md:mt-14">
          <Header :total-price="totalPrice" @open-drawer="openDrawer" />

          <div class="p-4 md:p-10 min-h-screen">
            <router-view />
          </div>
        </div>
      </div>
    </header>
    <footer>
      <section class="bg-[#181818] mt-2 py-2 px-4 md:px-96">
        <div class="container mx-auto px-4">
          <div class="flex flex-col items-center gap-6 text-[#bababa] text-sm md:text-xl">
            <div class="flex justify-center w-max pb-2">© ООО "ГИМЕД", 2025</div>
          </div>
        </div>
      </section>
    </footer>
  </template>
  <router-view v-else />
</template>
