<!-- <script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import CardList from '../components/CardList.vue'
import { inject } from 'vue'
const { addToCart, removeFromCart } = inject('cart')
const favorites = ref([])

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        item_id: item.id,
      }

      item.isFavorite = true

      const { data } = await axios.post(`https://9335c0dff8a200f2.mokky.dev/favorites`, obj)

      item.favoriteId = data.id
    } else {
      item.isFavorite = false
      await axios.delete(`https://9335c0dff8a200f2.mokky.dev/favorites/${item.favoriteId}`)
      item.favoriteId = null
    }
  } catch (err) {
    console.log(err)
  }
}

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }
}

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://9335c0dff8a200f2.mokky.dev/favorites?_relations=items',
    )
    favorites.value = data.map((obj) => {
      const item = obj.item
      item.isFavorite = true
      return item
    })
  } catch (err) {
    console.log(err)
  }
})
</script>
<template>
  <div class="min-h-screen">
    <h1 class="text-3xl font-bold mb-8">Избранные товары</h1>
    <div v-if="favorites.length === 0" class="text-gray-500">У вас нет избранных товаров.</div>
    <CardList :items="favorites" @add-to-favorite="addToFavorite" @add-to-cart="onClickAddPlus" />
  </div>
</template> -->
