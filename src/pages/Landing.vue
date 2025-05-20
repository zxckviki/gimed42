<template>
  <!-- Темная шапка с меню -->
  <div id="top" class="absolute top-0"></div>

  <!-- Мобильное меню -->
  <header class="bg-[#212121] text-white w-full fixed top-0 z-40">
    <div class="container mx-auto h-16 md:h-24 flex items-center justify-between px-4">
      <!-- Кнопка бургер меню для мобильных -->
      <button @click="toggleMenu" class="md:hidden text-white focus:outline-none" aria-label="Меню">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <!-- Навигация для десктопа -->
      <nav class="hidden md:flex justify-end w-full space-x-4 lg:space-x-8 text-lg lg:text-2xl">
        <a href="#kom" class="hover:text-[#949494] transition-colors duration-200"> О компании </a>
        <a href="#usl" class="hover:text-[#949494] transition-colors duration-200"> Наши услуги </a>
        <a href="/catalog" class="hover:text-[#949494] transition-colors duration-200">
          Каталог продуктов
        </a>
        <a href="#kon" class="hover:text-[#949494] transition-colors duration-200"> Контакты </a>
      </nav>
    </div>

    <!-- Мобильное меню (появляется при клике) -->
    <div
      v-if="isMenuOpen"
      class="md:hidden bg-[#212121] w-full py-4 px-4 absolute top-16 left-0 shadow-lg"
    >
      <nav class="flex flex-col space-y-4 text-xl">
        <a
          href="#kom"
          class="hover:text-[#949494] transition-colors duration-200 py-2"
          @click="closeMenu"
          >О компании</a
        >
        <a
          href="#usl"
          class="hover:text-[#949494] transition-colors duration-200 py-2"
          @click="closeMenu"
          >Наши услуги</a
        >
        <a
          href="#kat"
          class="hover:text-[#949494] transition-colors duration-200 py-2"
          @click="closeMenu"
          >Каталог продуктов</a
        >
        <a
          href="#kon"
          class="hover:text-[#949494] transition-colors duration-200 py-2"
          @click="closeMenu"
          >Контакты</a
        >
      </nav>
    </div>
  </header>

  <!-- Основной контент с отступом для фиксированного хедера -->
  <main class="pt-16 md:pt-24">
    <div
      class="bg-[radial-gradient(50%_60%_at_center,_var(--tw-gradient-stops))] from-[#0a6379] to-[#01243a] pt-10 h-auto min-h-[50vh] md:min-h-[60vh] pb-20"
    >
      <div class="container mx-auto flex flex-col items-center justify-center text-center px-4">
        <img src="/logo2.png" alt="Логотип ГИМЕД" class="h-48 md:h-96 w-auto" />

        <h1 class="text-5xl md:text-9xl font-bold text-white mb-6">ГИМЕД</h1>

        <div class="text-[#A5D8FF] text-xl md:text-3xl max-w-4xl mx-auto space-y-4 gap-y-2">
          <p>ДЕЗИНФИЦИРУЮЩИЕ СРЕДСТВА</p>
          <p>МЕДИЦИНСКИЙ РАСХОДНЫЙ МАТЕРИАЛ</p>
          <p>ОБОРУДОВАНИЕ</p>
        </div>
      </div>
    </div>

    <section class="h-auto flex items-center justify-center bg-white">
      <div id="kom" class="container mx-auto max-w-7xl py-10 md:py-20 px-4">
        <div class="flex flex-col lg:flex-row items-center gap-6 md:gap-12 lg:gap-20">
          <!-- Блок с изображением - измененный порядок и адаптация -->
          <div class="w-full lg:w-1/2 xl:w-3/5 order-2 lg:order-1">
            <img
              src="/site/sotrud.jpeg"
              alt="Фото сотрудников"
              class="rounded-xl shadow-xl w-full h-auto object-cover max-w-[500px] mx-auto lg:max-w-none"
            />
          </div>

          <!-- Блок с текстом -->
          <div class="w-full lg:w-1/2 xl:w-2/5 order-1 lg:order-2">
            <h1
              class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-black text-center lg:text-left"
            >
              О нашей компании
            </h1>

            <div
              class="text-justify space-y-4 md:space-y-6 text-[#4c4c4c] text-base sm:text-lg leading-relaxed"
            >
              <p>
                ООО "Гимед" – компания с более чем двадцатилетним опытом работы на рынке
                дезинфицирующих средств, медицинских расходных материалов и оборудования. За это
                время компания "Гимед" завоевала доверие многих клиентов благодаря высокому качеству
                нашей продукции, надежному сервису и профессионализму.
              </p>

              <p>
                Компания "Гимед" предлагает широкий ассортимент продукции, которая соответствует
                самым высоким стандартам качества и безопасности.
              </p>

              <p>
                Цель компании – обеспечение наших клиентов современными и качественными
                дезинфицирующими средствами, медицинскими расходными материалами и оборудованием для
                эффективной работы медицинских учреждений.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 md:py-16 bg-[#f5f5f5]">
      <div id="usl" class="container mx-auto px-4">
        <h2 class="text-3xl md:text-5xl font-bold mb-6 text-black text-center pt-2 pb-8 md:pb-14">
          Наши услуги
        </h2>

        <!-- Измененная сетка услуг -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 px-0 sm:px-4 md:px-8 lg:px-24"
        >
          <!-- Услуга 1 -->
          <div class="flex flex-col items-center p-4 w-full max-w-xs sm:max-w-none">
            <img
              src="/site/1.png"
              alt="Качество"
              class="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-3 sm:mb-4"
            />
            <h3 class="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3 text-center">
              Качественная продукция
            </h3>
            <p class="text-[#4c4c4c] text-center text-sm sm:text-base md:text-lg">
              Наша компания работает только с надежными производителями, чьи товары соответствуют
              высоким стандартам качества и безопасности.
            </p>
          </div>

          <!-- Услуга 2 -->
          <div class="flex flex-col items-center p-4 w-full max-w-xs sm:max-w-none">
            <img
              src="/site/2.png"
              alt="Доставка"
              class="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-3 sm:mb-4"
            />
            <h3 class="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3 text-center">
              Стабильная поставка
            </h3>
            <p class="text-[#4c4c4c] text-center text-sm sm:text-base md:text-lg">
              Мы гарантируем своим клиентам быструю и надежную поставку дезинфицирующих средств,
              медицинских расходных материалов и оборудования.
            </p>
          </div>

          <!-- Услуга 3 -->
          <div
            class="flex flex-col items-center p-4 w-full max-w-xs sm:max-w-none col-span-1 sm:col-span-2 lg:col-span-1"
          >
            <img
              src="/site/3.png"
              alt="Сервис"
              class="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-3 sm:mb-4"
            />
            <h3 class="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3 text-center">
              Комплексный подход в работе с клиентами
            </h3>
            <p class="text-[#4c4c4c] text-center text-sm sm:text-base md:text-lg">
              Наша компания предоставляет широкий спектр сервисных услуг и высококвалифицированные
              консультации.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 md:py-16 bg-white">
      <div class="container mx-auto px-4">
        <!-- Заголовок и подзаголовок -->
        <div class="text-center mb-8 md:mb-12">
          <h2 class="text-3xl md:text-5xl font-bold text-black text-center mb-4">
            Преимущества компании
          </h2>
          <h3 class="text-xl md:text-2xl text-[#4c4c4c] max-w-2xl mx-auto">
            Вот несколько причин, почему вам нужно выбрать <br class="hidden md:block" />
            услуги именно нашей компании
          </h3>
        </div>

        <!-- Вертикальный список преимуществ -->
        <div class="max-w-3xl mx-auto">
          <!-- Преимущество 1 -->
          <div class="flex items-start gap-4 md:gap-6 mb-6 md:mb-8 px-0">
            <div
              class="flex-shrink-0 bg-wight text-black shadow-2xl rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-xl md:text-2xl shadow-black"
            >
              1
            </div>
            <div class="text-left">
              <h3 class="text-xl md:text-2xl font-bold text-black mb-2">
                Один из самых разнообразных портфелей средств
              </h3>
              <p class="text-[#4c4c4c] text-base md:text-lg">
                Наша компания предлагает широкий ассортимент качественной продукции.
              </p>
            </div>
          </div>

          <!-- Преимущество 2 -->
          <div class="flex items-start gap-4 md:gap-6 mb-6 md:mb-8 px-0">
            <div
              class="flex-shrink-0 bg-wight text-black shadow-2xl rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-xl md:text-2xl shadow-black"
            >
              2
            </div>
            <div class="text-left">
              <h3 class="text-xl md:text-2xl font-bold text-black mb-2">
                Высококвалифицированный штат специалистов
              </h3>
              <p class="text-[#4c4c4c] text-base md:text-lg">
                Наши сотрудники обладают глубокими знаниями и опытом работы в различных областях,
                что позволяет им эффективно решать сложные задачи и находить инновационные решения.
              </p>
            </div>
          </div>

          <!-- Преимущество 3 -->
          <div class="flex items-start gap-4 md:gap-6 px-0">
            <div
              class="flex-shrink-0 bg-wight text-black shadow-2xl rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-xl md:text-2xl shadow-black"
            >
              3
            </div>
            <div class="text-left">
              <h3 class="text-xl md:text-2xl font-bold text-black mb-2">
                Наличие складских помещений
              </h3>
              <p class="text-[#4c4c4c] text-base md:text-lg">
                Наш склад расположен рядом с офисом в черте города, это способствует более быстрой
                организации поставки товаров.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 md:py-16 bg-[#f5f5f5]">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-800">
          Новости компании
        </h2>

        <div class="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-8">
          <!-- Новость 1 -->
          <div
            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 w-full md:min-w-[300px] md:max-w-md"
          >
            <img
              src="/site/novost1.png"
              alt="Форум Российская неделя здравоохранения"
              class="w-full h-48 object-cover"
            />
            <div class="p-4 md:p-6">
              <div class="text-[#409180] font-semibold mb-2">29 ноября 2024</div>
              <h3 class="text-lg md:text-xl font-bold mb-4">Участие в форуме здравоохранения</h3>
              <p class="text-gray-600 text-sm md:text-base text-justify">
                С 2-6 декабря 2024 года генеральный директор ООО "ГИМЕД" посетит научно-практический
                форум "Российская неделя здравоохранения-2024", который пройдет в ЦВК "ЭКСПОЦЕНТР".
                <br />
                (г.Москва)
              </p>
            </div>
          </div>

          <!-- Новость 2 -->
          <div
            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 w-full md:min-w-[300px] md:max-w-md"
          >
            <img
              src="/site/novost2.jpg"
              alt="Обучающий семинар в больнице"
              class="w-full h-48 object-cover"
            />
            <div class="p-4 md:p-6">
              <div class="text-[#409180] font-semibold mb-2">25 сентября 2024</div>
              <h3 class="text-lg md:text-xl font-bold mb-4">Обучающий семинар</h3>
              <p class="text-gray-600 text-sm md:text-base text-justify">
                Специалисты ООО «ГИМЕД» организовали и провели обучающий семинар в Новокузнецкой
                городской клинической больнице № 1 на тему: «Эффективное использование лечебных
                повязок».
              </p>
            </div>
          </div>

          <!-- Новость 3 -->
          <div
            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 w-full md:min-w-[300px] md:max-w-md"
          >
            <img
              src="/site/novost3.jpg"
              alt="Заседание координационного совета"
              class="w-full h-48 object-cover"
            />
            <div class="p-4 md:p-6">
              <div class="text-[#409180] font-semibold mb-2">14 февраля 2024</div>
              <h3 class="text-lg md:text-xl font-bold mb-4">Участие в заседании совета</h3>
              <p id="kat" class="text-gray-600 text-sm md:text-base text-justify">
                ООО «ГИМЕД» принял участие в заседании координационного совета Ассоциации
                медицинских сестер Кузбасса на "Кузбасская областная клиническая больница имени С.В.
                Беляева" и представил новинки дезинфицирующих средств.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 md:py-20 bg-white from-blue-50 to-gray-50">
      <div class="container mx-auto px-4 text-center">
        <!-- Заголовок -->
        <h2 class="text-3xl md:text-5xl font-bold text-gray-800 mb-6 md:mb-8">Каталог продуктов</h2>

        <!-- Кнопка -->
        <router-link
          to="/catalog"
          class="inline-block px-6 py-3 md:px-8 md:py-4 bg-[#08546a] hover:bg-[#0854c7] text-white text-lg md:text-xl font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
          @click.prevent="goToCatalog"
        >
          Перейти к каталогу продуктов
        </router-link>
      </div>
    </section>

    <section class="py-10 md:py-8 bg-[#f5f5f5]">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-800">
          Достижения компании
        </h2>

        <!-- Первая строка (теперь с 3 элементами) -->
        <div
          class="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-8 px-0 md:px-4 lg:px-8 xl:px-20 2xl:px-40"
        >
          <!-- Благодарственные письма -->
          <div class="flex flex-col items-center w-full sm:w-auto px-4 sm:px-0">
            <div class="flex justify-center h-48 md:h-64">
              <img
                src="/site/gram1.jpg"
                alt="Благодарственное письмо"
                class="rounded-xl shadow-xl h-full w-auto object-cover"
              />
            </div>
            <h3
              class="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mt-4 text-center h-[3.5rem] flex items-center justify-center"
            >
              Благодарственные <br />
              письма
            </h3>
          </div>

          <!-- Благодарность за конференцию -->
          <div class="flex flex-col items-center w-full sm:w-auto px-4 sm:px-0">
            <div class="flex justify-center h-48 md:h-64">
              <img
                src="/site/gram3.jpeg"
                alt="Благодарность за конференцию"
                class="rounded-xl shadow-xl h-full w-auto object-cover"
              />
            </div>
            <h3
              class="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mt-4 text-center h-[3.5rem] flex items-center justify-center"
            >
              Благодарность за участие <br />
              в конференции
            </h3>
          </div>

          <!-- Призовые места (перемещено на первую строку) -->
          <div
            class="flex flex-col items-center w-full sm:w-auto px-4 sm:px-0 order-first sm:order-none"
          >
            <div class="flex justify-center h-48 md:h-64">
              <img
                src="/site/gram5.jpeg"
                alt="Призовые места"
                class="rounded-xl shadow-xl h-full w-auto object-cover"
              />
            </div>
            <h3
              class="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mt-4 text-center h-[3.5rem] flex items-center justify-center"
            >
              Призовые места за <br />
              лучшие продажи
            </h3>
          </div>
        </div>

        <!-- Вторая строка (только для сертификата) -->
        <div
          class="flex flex-col md:flex-row justify-center mt-8 md:mt-12 px-0 md:px-4 lg:px-8 xl:px-20 2xl:px-40"
        >
          <!-- Сертификат победителя -->
          <div class="flex flex-col items-center w-full sm:w-auto px-4 sm:px-0">
            <div class="flex justify-center h-48 md:h-64">
              <img
                src="/site/gram4.png"
                alt="Сертификат победителя"
                class="rounded-xl shadow-xl h-full w-auto object-cover"
              />
            </div>
            <h3 class="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mt-4 text-center">
              Сертификат победителя<br />
              по итогам 4Q 2020
            </h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Блок "Гуманитарная помощь" -->
    <section class="py-10 md:py-16 bg-white mb-3">
      <div class="container mx-auto px-4">
        <div
          class="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 px-0 md:px-4 lg:px-8 xl:px-72"
        >
          <!-- Левая колонка - текст и фото1 -->
          <div
            class="flex flex-col text-justify gap-4 md:gap-6 w-full lg:w-1/2 max-w-md mx-auto lg:mx-0"
          >
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Гуманитарная помощь
            </h2>
            <p class="text-sm sm:text-base md:text-lg text-gray-600">
              В 2022 году компания Гимед оказывала гуманитарную помощь участникам СВО. Были
              отправлены перевязочные материалы.
            </p>
            <p class="text-sm sm:text-base md:text-lg text-gray-600">
              За проведённую акцию генеральный директор компании был награждён Почетным знаком
              Законодательного Собрания Кемеровской области — Кузбасса "За гражданскую доблести и
              патриотизм".
            </p>
            <img
              src="/site/guman.jpeg"
              alt="Гуманитарная помощь"
              class="rounded-lg shadow-md w-full object-cover"
            />
          </div>

          <!-- Правая колонка - фото2 с наложенным фото3 -->
          <div class="relative w-full lg:w-1/2 mt-6 lg:mt-0 flex items-center justify-center">
            <div class="relative w-full max-w-md mx-auto">
              <img
                src="/site/guman2.jpeg"
                alt="Награждение"
                class="rounded-lg shadow-md w-full h-auto"
              />

              <div
                class="absolute bottom-4 sm:bottom-10 md:bottom-8 right-12 sm:right-6 md:right-8 transform translate-x-1/4 translate-y-1/4 w-1/2 sm:w-1/2 md:w-2/5"
              >
                <img
                  src="/site/guman3.jpeg"
                  alt="Почетный знак"
                  class="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-8 md:py-12 bg-[#181818]">
      <div id="kon" class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row gap-8">
          <!-- Левая колонка - контактная информация -->
          <div class="space-y-6 ml-0 md:ml-10 lg:ml-80 md:w-1/2">
            <h2 class="text-2xl md:text-3xl font-bold text-[#ffffff] mb-6 md:mb-8 text-left">
              Контакты
            </h2>

            <!-- Email -->
            <div class="flex items-start gap-4">
              <svg
                class="w-6 h-6 text-[#bababa] mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div class="flex items-center">
                <a
                  href="mailto:office@gimed42.ru"
                  class="text-base md:text-lg text-[#bababa] hover:text-blue-600 cursor-pointer"
                  @click.prevent="copyToClipboard('office@gimed42.ru', 'email')"
                >
                  office@gimed42.ru
                </a>
                <span v-if="showCopied === 'email'" class="ml-2 text-sm text-green-400">
                  Скопировано!
                </span>
              </div>
            </div>

            <!-- Телефоны -->
            <div class="flex items-start gap-4">
              <svg
                class="w-6 h-6 text-[#bababa] mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div class="space-y-2">
                <div class="flex items-center">
                  <a
                    href="tel:+79516043975"
                    class="block text-base md:text-lg text-[#bababa] hover:text-blue-600 cursor-pointer"
                    @click.prevent="copyToClipboard('+7 951-604-3975', 'phone1')"
                  >
                    +7 951-604-3975
                  </a>
                  <span v-if="showCopied === 'phone1'" class="ml-2 text-sm text-green-400">
                    Скопировано!
                  </span>
                </div>
                <div class="flex items-center">
                  <a
                    href="tel:+7384522544"
                    class="block text-base md:text-lg text-[#bababa] hover:text-blue-600 cursor-pointer"
                    @click.prevent="copyToClipboard('+7 (3842) 45-22-44', 'phone2')"
                  >
                    +7 (3842) 45-22-44
                  </a>
                  <span v-if="showCopied === 'phone2'" class="ml-2 text-sm text-green-400">
                    Скопировано!
                  </span>
                </div>
              </div>
            </div>

            <!-- Адрес -->
            <div class="flex items-start gap-4">
              <svg
                class="w-6 h-6 text-[#bababa] mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <p class="text-base md:text-lg text-[#bababa]">г. Кемерово, ул. Радищева, 2/6</p>
                <p class="text-base md:text-lg text-[#bababa] mt-2">Режим работы:</p>
                <p class="text-base md:text-lg text-[#bababa]">пн-пт 08:30–17:30</p>
              </div>
            </div>
          </div>

          <!-- Правая колонка - карта -->
          <div
            class="bg-gray-100 rounded-lg overflow-hidden mr-0 md:mr-10 lg:mr-40 md:w-1/2 mt-8 md:mt-0"
          >
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A0594b5d5c9a95c5f3026b38804965b3b569a95781773f2f1efbbbf3d0d0d16f0&amp;source=constructor"
              width="100%"
              height="300"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <section class="bg-[#181818] px-4 md:px-96">
      <div class="container mx-auto px-4">
        <div class="flex flex-col items-center gap-4 md:gap-6 text-[#bababa] text-base md:text-xl">
          <!-- Меню подвала -->
          <nav class="relative flex justify-center w-full md:w-64">
            <div class="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
              <a
                href="#kom"
                class="hover:text-[#949494] transition px-4 py-2 md:absolute md:right-full md:mr-1 md:w-40"
                >О компании</a
              >
              <a href="#usl" class="hover:text-[#949494] transition px-4 py-2">Наши услуги</a>
              <a
                href="#kat"
                class="hover:text-[#949494] transition px-4 py-2 md:absolute md:left-full md:ml-1 md:w-[13rem]"
                >Каталог продуктов</a
              >
            </div>
          </nav>

          <!-- Копирайт -->
          <div class="flex justify-center w-max pb-6">© ООО "ГИМЕД", 2025</div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      showCopied: null,
      copyTimeout: null,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    goToCatalog() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setTimeout(() => this.$router.push('/catalog'), 300)
    },
    async copyToClipboard(text, type) {
      try {
        // Для email копируем как есть, для телефонов удаляем все нецифровые символы
        const textToCopy = type === 'email' ? text : text.replace(/\D/g, '')
        await navigator.clipboard.writeText(textToCopy)
        this.showCopied = type

        if (this.copyTimeout) clearTimeout(this.copyTimeout)

        this.copyTimeout = setTimeout(() => {
          this.showCopied = null
        }, 2000)
      } catch (err) {
        console.error('Ошибка при копировании:', err)
        const textArea = document.createElement('textarea')
        textArea.value = type === 'email' ? text : text.replace(/\D/g, '')
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)

        this.showCopied = type
        this.copyTimeout = setTimeout(() => {
          this.showCopied = null
        }, 2000)
      }
    },
  },
  beforeUnmount() {
    if (this.copyTimeout) clearTimeout(this.copyTimeout)
  },
}
</script>
