<script setup>
defineProps({
  id: Number,
  title: String,
  category: String,
  description: String,
  maker: String,
  manu: String,
  release: String,
  date: String,
  imageUrl: String,
  price: Number,
  // isFavorite: Boolean,
  isAdded: Boolean,
  // onClickFavorite: Function,
  onClickAdd: Function,
})

const localIsAdded = defineModel('isAdded', { default: false })
</script>

<template>
  <div
    class="relative bg-white border border-slate-100 rounded-3xl p-4 md:p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl flex flex-col h-full"
  >
    <!-- <img
      v-if="onClickFavorite && $route.path !== '/favorites'"
      :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
      alt="Like 1"
      class="absolute top-4 left-4 md:top-8 md:left-8 w-7 h-7 md:w-auto md:h-auto"
      @click="onClickFavorite"
    /> -->
    <div class="flex justify-center">
      <img :src="imageUrl" alt="Product" class="max-w-full max-h-40 md:max-h-64 object-contain" />
    </div>

    <p class="mt-2 font-bold text-base md:text-lg">{{ title }}</p>
    <p class="mt-2 text-slate-500 text-xs">{{ description }}</p>

    <p class="mt-1 text-slate-500 text-xs">{{ date }}</p>
    <p class="mt-1 text-slate-500 text-xs">{{ release }}</p>
    <p class="mt-1 text-slate-500 text-xs">{{ maker }}</p>
    <p class="mt-1 text-slate-500 text-xs break-words text-justify">{{ manu }}</p>

    <div id="zxc" class="flex justify-between items-center mt-auto pt-2">
      <div class="flex flex-col">
        <span class="text-slate-700 font-medium text-sm md:text-base"> Цена </span>
        <b class="text-sm md:text-base"> {{ price }} руб.</b>
      </div>
      <img
        v-if="onClickAdd"
        @click="onClickAdd"
        @keydown.enter="onClickAdd"
        @keydown.space="onClickAdd"
        :src="!localIsAdded ? '/plus.svg' : '/checked.svg'"
        alt="Добавить в корзину"
        tabindex="0"
        role="button"
        class="flex items-center justify-center w-auto h-5/6"
      />
    </div>
  </div>
</template>
