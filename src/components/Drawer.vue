<script setup>
import axios from 'axios'
import { ref, computed, inject } from 'vue'
import CartItamList from './CartItamList.vue'
import DrawerHead from './DrawerHead.vue'
import InfoBlock from './infoBlock.vue'

import emailjs from '@emailjs/browser'

const { cart, totalPrice } = inject('cart')

const isCreating = ref(false)
const orderId = ref(null)
const showContactForm = ref(false)

// Данные формы
const formData = ref({
  name: '',
  email: '',
  phone: '',
})

const createOrder = async () => {
  try {
    isCreating.value = true
    // Создаем заказ
    const { data } = await axios.post(`https://9335c0dff8a200f2.mokky.dev/orders`, {
      items: cart.value,
      totalPrice: totalPrice.value,
      customer: formData.value,
    })
    // Отправляем письмо через EmailJS
    await emailjs.send(
      'service_sr8ocur',
      'template_quhw06s',
      {
        customer_name: formData.value.name,
        customer_email: formData.value.email,
        customer_phone: formData.value.phone,
        order_id: data.id,
        total_price: totalPrice.value.toLocaleString('ru-RU'),
        items: cart.value
          .map(
            (item) =>
              `${item.title} - ${(item.price * (item.quantity || 1)).toLocaleString('ru-RU')} руб. (${item.quantity || 1} шт.)`,
          )
          .join('\n- '),
      },
      'MJcumACXul6Iu0onO',
    )
    cart.value = []
    orderId.value = data.id
    showContactForm.value = false
  } catch (error) {
    console.error('Ошибка:', error)
  } finally {
    isCreating.value = false
  }
}

const showForm = () => {
  showContactForm.value = true
}

const cartEmpty = computed(() => cart.value.length === 0)
const buttonDisabled = computed(() => isCreating.value || cartEmpty.value)

const handleNameInput = (e) => {
  e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\s]/g, '')
  formData.value.name = e.target.value
}

const handlePhoneInput = (e) => {
  let phone = e.target.value.replace(/\D/g, '')

  // Если номер начинается не с 7, добавляем 7 в начало
  if (!phone.startsWith('7') && phone.length > 0) {
    phone = '7' + phone.replace(/^7/, '')
  }

  // Ограничиваем общую длину (7 уже есть + 10 цифр)
  if (phone.length > 11) {
    phone = phone.substring(0, 11)
  }

  let formattedPhone = '+7'
  if (phone.length > 1) {
    formattedPhone += ` (${phone.substring(1, 4)}`
    if (phone.length > 4) formattedPhone += `) ${phone.substring(4, 7)}`
    if (phone.length > 7) formattedPhone += `-${phone.substring(7, 9)}`
    if (phone.length > 9) formattedPhone += `-${phone.substring(9)}`
  }

  e.target.value = formattedPhone
  // Сохраняем только цифры (включая 7 в начале)
  formData.value.phone = phone
}

const handleEmailInput = (e) => {
  formData.value.email = e.target.value
}

const isEmailValid = computed(() => {
  return (
    formData.value.email.includes('@') &&
    formData.value.email.length > 3 &&
    formData.value.email.split('@')[1]?.includes('.')
  )
})
</script>

<template>
  <div id="zxc" class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div
    id="zxc2"
    class="bg-white w-full sm:w-96 h-full fixed right-0 top-0 z-20 p-4 sm:p-6 overflow-y-auto"
  >
    <DrawerHead />

    <div v-if="cartEmpty || orderId" class="flex h-full items-center">
      <InfoBlock
        v-if="cartEmpty && !orderId"
        title="Корзина пустая"
        description="Добавте хотя бы один товар, чтобы сделать заказ."
        image-url="/package-icon.png"
      />
      <InfoBlock
        v-if="orderId"
        title="Заказ сформирован!"
        :description="`Ваш заказ #${orderId} будет передан представителю компании и в скором времени с вами свяжутся!`"
        image-url="/order-success-icon.png"
      />
    </div>

    <div v-else>
      <CartItamList />

      <!-- Форма контактных данных -->
      <div v-if="showContactForm" class="mt-6 space-y-4">
        <div class="mt-6 space-y-4">
          <h3 class="text-lg font-semibold">Контактные данные</h3>

          <div>
            <label for="fullname" class="block text-sm font-medium text-gray-700 mb-1">
              ФИО
              <span class="sr-only">Обязательное поле</span>
            </label>
            <input
              id="fullname"
              v-model="formData.name"
              @input="handleNameInput"
              type="text"
              class="w-full p-2 border border-gray-300 rounded-md focus:ring-lime-500 focus:border-lime-500"
              placeholder="Иванов Иван Иванович"
              required
              pattern="[А-Яа-яЁё\s]+"
              aria-describedby="fullname-error"
              aria-invalid="false"
            />
            <div id="fullname-error" class="sr-only" aria-live="polite">
              Только русские буквы и пробелы
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
              Email
              <span class="sr-only">Обязательное поле</span>
            </label>
            <input
              id="email"
              v-model="formData.email"
              @input="handleEmailInput"
              type="email"
              class="w-full p-2 border border-gray-300 rounded-md focus:ring-lime-500 focus:border-lime-500"
              :class="{ 'border-red-500': formData.email && !isEmailValid }"
              placeholder="example@mail.com"
              required
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              aria-describedby="email-error"
              :aria-invalid="formData.email && !isEmailValid ? 'true' : 'false'"
            />
            <div id="email-error" class="text-red-500 text-xs mt-1" aria-live="assertive">
              <span v-if="formData.email && !isEmailValid" class="sr-only">Ошибка: </span>
              <span v-if="formData.email && !isEmailValid">
                Пожалуйста, введите корректный email (должен содержать @ и домен)
              </span>
            </div>
          </div>

          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
              Телефон
              <span class="sr-only">Обязательное поле</span>
            </label>
            <input
              id="phone"
              v-model="formData.phone"
              @input="handlePhoneInput"
              type="tel"
              class="w-full p-2 border border-gray-300 rounded-md focus:ring-lime-500 focus:border-lime-500 text-black placeholder-gray-400"
              placeholder="+7 (___) ___-__-__"
              required
              maxlength="18"
              pattern="^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$"
              aria-describedby="phone-error"
              :aria-invalid="formData.phone && !isPhoneValid ? 'true' : 'false'"
              style="color: #000"
            />
            <div id="phone-error" class="sr-only" aria-live="polite">
              Введите 10 цифр номера после +7
            </div>
          </div>
        </div>

        <div class="flex gap-2 mt-4">
          <button
            @click="createOrder"
            :disabled="isCreating || !formData.name || !formData.email || !formData.phone"
            class="transition hover:bg-lime-600 active:bg-lime-700 bg-lime-500 w-full rounded-xl py-3 text-white disabled:bg-slate-300 cursor-pointer"
          >
            <span v-if="!isCreating">Подтвердить заказ</span>
            <span v-else>Оформляем...</span>
          </button>

          <button
            @click="showContactForm = false"
            class="transition hover:bg-gray-200 active:bg-gray-300 bg-gray-100 w-full rounded-xl py-3 text-gray-800 cursor-pointer"
          >
            Назад
          </button>
        </div>

        <!-- Добавленная подпись с ссылкой -->
        <p class="text-xs text-gray-500 text-center mt-2">
          Нажимая кнопку "Подтвердить заказ", вы соглашаетесь с <br />
          <a href="/privacy" class="text-lime-600 hover:underline"
            >политикой обработки персональных данных</a
          >.
        </p>
      </div>

      <!-- Блок с итогами (показывается когда форма скрыта) -->
      <div v-else class="flex flex-col gap-4 mt-7">
        <div class="flex gap-2">
          <span>Итого:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>{{ totalPrice.toLocaleString('ru-RU') }} руб.</b>
        </div>

        <button
          :disabled="buttonDisabled"
          @click="showForm"
          class="mt-4 transition hover:bg-lime-600 active:bg-lime-700 bg-lime-500 w-full rounded-xl py-3 text-white disabled:bg-slate-300 cursor-pointer"
        >
          Сформировать заказ
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#zxc {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9998; /* Ниже корзины, но выше всего остального */
}

#zxc2 {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 420px; /* Ширина корзины */
  height: 100%;
  background: white;
  z-index: 9999; /* Выше всего */
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
}
</style>
