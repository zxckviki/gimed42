<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update-quantity', 'remove-item'])

// Обработчик изменения количества
const handleQuantityChange = (e) => {
  const value = e.target.value
  // Удаляем все нечисловые символы
  const cleanValue = value.replace(/\D/g, '')
  // Приводим к числу, ограничиваем между 1 и 10000
  const newQuantity = Math.max(1, Math.min(10000, parseInt(cleanValue) || 1))

  // Обновляем значение в input
  e.target.value = newQuantity
  // Отправляем событие родителю
  emit('update-quantity', props.item, newQuantity)
}

// Обработчик потери фокуса
const handleBlur = (e) => {
  if (!e.target.value || parseInt(e.target.value) < 1) {
    e.target.value = '1'
    emit('update-quantity', props.item, 1)
  }
}

// Обработчик клика по кнопке удаления
const handleRemove = () => {
  emit('remove-item', props.item)
}

// Обработчик клавиш
const handleKeyDown = (e) => {
  // Разрешаем: backspace (8), tab (9), enter (13), escape (27), delete (46)
  if ([8, 9, 13, 27, 46].includes(e.keyCode)) return

  // Разрешаем: Ctrl+A (65), Ctrl+C (67), Ctrl+V (86), Ctrl+X (88)
  if ((e.ctrlKey || e.metaKey) && [65, 67, 86, 88].includes(e.keyCode)) return

  // Разрешаем цифры (48-57) и numpad (96-105)
  if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) return

  // Разрешаем стрелки (37-40) и home/end (35-36)
  if ([35, 36, 37, 38, 39, 40].includes(e.keyCode)) return

  // Запрещаем все остальное
  e.preventDefault()
}
</script>

<template>
  <div
    class="flex items-center border border-slate-200 rounded-xl p-4 gap-4 hover:shadow-md transition-shadow"
  >
    <!-- Изображение товара -->
    <img class="w-16 h-16 object-contain flex-shrink-0" :src="imageUrl" :alt="title" />

    <!-- Информация о товаре -->
    <div class="flex flex-col flex-1 min-w-0">
      <!-- Название товара -->
      <h3 class="font-medium text-gray-900 truncate">{{ title }}</h3>

      <!-- Блок с количеством и ценой -->
      <div class="flex justify-between items-center mt-3 gap-2">
        <!-- Количество -->
        <div class="flex items-center gap-3">
          <input
            type="number"
            min="1"
            max="10000"
            :value="item.quantity || 1"
            @input="handleQuantityChange"
            @blur="handleBlur"
            @keydown="handleKeyDown"
            class="w-16 border border-gray-300 rounded-md py-1 px-2 text-center focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <!-- Сумма -->
        <div class="text-base font-semibold whitespace-nowrap">
          {{ (price * (item.quantity || 1)).toLocaleString('ru-RU') }} р.
        </div>

        <!-- Кнопка удаления -->
        <button
          @click="handleRemove"
          class="p-1 text-gray-400 hover:text-red-500 transition-colors"
          aria-label="Удалить товар"
          title="Удалить"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Скрываем стрелки у числового input */
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
