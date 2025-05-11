<script setup>
import Card from './Card.vue'

defineProps({
  items: Array,
  // isFavorites: Boolean,
})

const emit = defineEmits([/*'addToFavorite',*/ 'addToCart'])
</script>

<template>
  <div
    class="grid grid-cols-1 min-[900px]:grid-cols-2 min-[1300px]:grid-cols-3 min-[1800px]:grid-cols-4 gap-4 md:gap-5"
    v-auto-animate
  >
    <Card
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :category="item.category"
      :description="item.description"
      :maker="item.maker"
      :manu="item.manu"
      :release="item.release"
      :date="item.date"
      :imageUrl="item.imageUrl"
      :price="item.price"

      :onClickAdd="/*isFavorites ? null :*/ () => emit('addToCart', item)"
      :isAdded="item.isAdded"
    />
  </div>
  <!-- :isFavorite="item.isFavorite"
      :onClickFavorite="isFavorites ? null : () => emit('addToFavorite', item)" -->
</template>
