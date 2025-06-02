<script setup>
import { reactive, watch, ref, onMounted } from 'vue'
import { inject } from 'vue'
import CardList from '../components/CardList.vue'
import debounce from 'lodash.debounce'
import axios from 'axios'

const { cart, addToCart, removeFromCart } = inject('cart')

const items = ref([])

const filters = reactive({
  sortBy: '',
  searchQuery: '',
  searchCategory: '',
})

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }
}

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value
}

const onChangeSelectInput = debounce((event) => {
  filters.searchQuery = event.target.value
}, 500)

const onChangeSelectCategory = (event) => {
  filters.searchCategory = event.target.value
}

// const addToFavorite = async (item) => {
//   try {
//     if (!item.isFavorite) {
//       const obj = {
//         item_id: item.id,
//       }

//       item.isFavorite = true

//       const { data } = await axios.post(`https://9335c0dff8a200f2.mokky.dev/favorites`, obj)

//       item.favoriteId = data.id
//     } else {
//       item.isFavorite = false
//       await axios.delete(`https://9335c0dff8a200f2.mokky.dev/favorites/${item.favoriteId}`)
//       item.favoriteId = null
//     }
//   } catch (err) {
//     console.log(err)
//   }
// }

// const fetchFavorites = async () => {
//   try {
//     const { data: favorites } = await axios.get(`https://9335c0dff8a200f2.mokky.dev/favorites`)

//     const currentState = {}
//     items.value.forEach((item) => {
//       currentState[item.id] = {
//         isFavorite: item.isFavorite, //ячс
//         favoriteId: item.favoriteId,
//       }
//     })

//     items.value = items.value.map((item) => {
//       const favorite = favorites.find((favorite) => favorite.item_id === item.id)

//       if (!favorite) {
//         return item
//       }

//       return {
//         ...item,
//         isFavorite: favorite ? true : currentState[item.id]?.isFavorite || false, //
//         favoriteId: favorite ? favorite.id : currentState[item.id]?.favoriteId || null,
//       }
//     })
//   } catch (err) {
//     console.log(err)
//   }
// }

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,
    }

    if (filters.searchCategory) {
      params.category = `*${filters.searchCategory}*`
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get(`https://9335c0dff8a200f2.mokky.dev/items`, {
      params,
    })

    console.log(params)

    const currentAddedState = {}
    items.value.forEach((item) => {
      currentAddedState[item.id] = item.isAdded
    })

    items.value = data.map((obj) => ({
      ...obj,
      isAdded: currentAddedState[obj.id] || cart.value.some((cartItem) => cartItem.id === obj.id),
    }))
  } catch (err) {
    console.log(err)
  }
}

onMounted(async () => {
  const localCart = localStorage.getItem('cart')
  cart.value = localCart ? JSON.parse(localCart) : []

  await fetchItems()
  //await fetchFavorites()

  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((CartItem) => CartItem.id === item.id),
  }))
})

watch(
  cart,
  () => {
    items.value = items.value.map((item) => ({
      ...item,
      isAdded: cart.value.some((CartItem) => CartItem.id === item.id),
    }))
  },
  { deep: true },
)

watch(filters, fetchItems)
</script>
<template>
  <main>
    <div
      id="nach"
      class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
    >
      <h2 class="text-3xl md:text-4xl font-bold">Каталог продуктов</h2>

      <!-- Измененная часть - теперь все фильтры одинаковой высоты -->
      <div class="w-full md:w-auto">
        <div class="grid grid-cols-1 min-[900px]:grid-cols-3 gap-2 items-end">
          <!-- Категория товара -->
          <div class="flex flex-col h-full">
            <h4 class="text-sm md:text-base mb-1">Категория товара:</h4>
            <select
              @change="onChangeSelectCategory"
              class="py-2 px-3 border rounded-md outline-none w-full h-[42px]"
            >
              <option value="">Любая</option>
              <option value="Антисептик">Антисептики</option>
              <option value="Дезинфицирующее средство">Дезинфицирующее средство</option>
              <option value="Средство обработки мед. оборудования">
                Средства обработки мед. оборудования
              </option>
              <option value="Средство для стирки">Средство для стирки</option>
            </select>
          </div>

          <!-- Сортировка -->
          <div class="flex flex-col h-full">
            <h4 class="text-sm md:text-base mb-1">Сортировка:</h4>
            <select
              @change="onChangeSelect"
              class="py-2 px-3 border rounded-md outline-none w-full h-[42px]"
            >
              <option value="">Отсутствует</option>
              <option value="title">По названию товара</option>
              <option value="price">По возрастанию цены</option>
              <option value="-price">По убыванию цены</option>
            </select>
          </div>

          <!-- Поиск -->
          <div class="flex flex-col h-full">
            <h4 class="text-sm md:text-base mb-1">ㅤ</h4>
            <div class="relative">
              <label for="search-input" class="sr-only">Поиск товаров</label>
              <div class="flex items-center h-[42px]">
                <img class="absolute left-4 top-3" src="/search.svg" alt="" aria-hidden="true" />
                <input
                  id="search-input"
                  type="search"
                  @input="onChangeSelectInput"
                  class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400 w-full h-full"
                  placeholder="Поиск..."
                  aria-describedby="search-hint"
                />
              </div>
              <span id="search-hint" class="sr-only">Введите название товара для поиска</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 md:mt-10">
      <CardList
        v-if="items.length > 0"
        :items="items"
        @add-to-favorite="addToFavorite"
        @add-to-cart="onClickAddPlus"
      />

      <div v-else class="flex flex-col items-center justify-center py-20 text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p class="text-xl font-medium">Нет товаров, соответствующих критериям поиска.</p>
      </div>
    </div>
  </main>
</template>
