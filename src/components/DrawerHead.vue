<script setup>
import { inject, onMounted, onBeforeUnmount } from 'vue'

const { closeDrawer } = inject('cart')

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeDrawer() // Закрываем корзину
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="flex items-center gap-5 mb-8">
    <button
      @click="closeDrawer"
      @keydown.enter="closeDrawer"
      @keydown.space="closeDrawer"
      class="opacity-30 cursor-pointer rotate-180 hover:opacity-100 transition hover:-translate-x-1"
      aria-label="Закрыть корзину"
    >
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M1 7H14.7143"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.71436 1L14.7144 7L8.71436 13"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <h2 class="text-2xl font-bold">Корзина</h2>
  </div>
</template>
