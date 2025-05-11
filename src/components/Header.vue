<script setup>
defineProps({
  totalPrice: Number,
})

const emit = defineEmits(['openDrawer'])
</script>

<template>
  <header
    class="flex flex-col md:flex-row justify-between border-b border-slate-200 px-4 py-4 md:px-10 md:py-8"
  >
    <!-- Логотип и название - центрируем на мобильных -->
    <div class="flex items-center gap-2 md:gap-4">
      <img src="/logo2.png" alt="Logo" class="w-12 md:w-20" />
      <div>
        <h2 class="text-xl md:text-3xl font-bold uppercase">ГИМЕД</h2>
      </div>
    </div>

    <!-- Ссылки на разделы - увеличиваем расстояние между ними на мобильных -->
    <ul class="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-10">
      <router-link to="/">
        <li
          class="flex items-center cursor-pointer gap-2 md:gap-3 text-gray-500 hover:text-black text-sm md:text-base"
        >
          <img src="/home2.png" alt="Cart" class="w-4 h-4 md:w-5 md:h-5" />
          <span>На главную</span>
        </li>
      </router-link>

      <li
        v-if="$route.path !== '/privacy'"
        @click="() => emit('openDrawer')"
        class="flex items-center cursor-pointer gap-2 md:gap-3 text-gray-500 hover:text-black text-sm md:text-base"
      >
        <img src="/cart.svg" alt="Cart" class="w-4 h-4 md:w-5 md:h-5" />
        <b>{{ totalPrice.toLocaleString('ru-RU') }} руб.</b>
      </li>

      <router-link to="/catalog" v-if="$route.path == '/privacy'">
        <li
          class="flex items-center cursor-pointer gap-2 md:gap-3 text-gray-500 hover:text-black text-sm md:text-base"
        >
          <img src="/katal2.png" alt="Cart" class="w-4 h-4 md:w-5 md:h-5" />
          <span>Каталог</span>
        </li>
      </router-link>

      <!-- <router-link to="/favorites" v-if="$route.path == '/catalog'">
        <li class="flex items-center cursor-pointer gap-1 md:gap-3 text-gray-500 hover:text-black text-sm md:text-base">
          <img src="/heart.svg" alt="Cart" class="w-4 h-4 md:w-5 md:h-5" />
          <span>Избранное</span>
        </li>
      </router-link> -->
    </ul>
  </header>
</template>
