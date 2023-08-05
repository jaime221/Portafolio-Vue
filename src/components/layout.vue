<template>
  <nav
    :class="{ 'bg-blue-900': !darkMode, 'bg-gray-900': darkMode }"
    class="text-white nav-fixed"
  >
    <input type="checkbox" id="menu-toggle" class="hidden" />
    <div class="container mx-auto px-4 py-2 flex justify-between items-center">
      <a href="/" class="text-xl font-bold tracking-tight">MI PORTAFOLIO</a>
      <label for="menu-toggle" class="cursor-pointer md:hidden">
        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 6H4V4H20V6ZM20 11H4V9H20V11ZM4 16V14H20V16H4Z"
          />
        </svg>
      </label>
      <u>
        <li>
          <button
            @click="toggleDarkMode"
            class="text-gray-200 hover:text-gray-400"
          >
            <svg
              v-if="darkMode"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            <svg
              v-else
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </button>
        </li>
      </u>
      <ul
        class="md:flex md:items-center md:justify-end text-sm hidden md:block"
      >
        <li>
          <a
            href="#/"
            class="block mt-4 md:inline-block md:mt-0 md:mr-6 hover:text-gray-200"
            >Home</a
          >
        </li>
        <li>
          <a
            href="#Technologies"
            class="block mt-4 md:inline-block md:mt-0 md:mr-6 hover:text-gray-200"
            >Technologies</a
          >
        </li>
        <li>
          <a
            href="#Repositories"
            class="block mt-4 md:inline-block md:mt-0 md:mr-6 hover:text-gray-200"
            >Repositories</a
          >
        </li>
        <li>
          <a
            href="#Contact"
            class="block mt-4 md:inline-block md:mt-0 md:mr-6 hover:text-gray-200"
            >Contact</a
          >
        </li>
      </ul>
    </div>
    <div class="container mx-auto md:hidden" id="menu">
      <ul class="md:flex md:items-center md:justify-end text-sm">
        <li>
          <a
            href="/"
            class="block mt-4 md:inline-block md:mt-0 md:mr-6 hover:text-gray-200"
            >Home</a
          >
        </li>
        <li>
          <a
            href="/hello"
            class="block mt-4 md:inline-block md:mt-0 md:mr-6 hover:text-gray-200"
            >Technologies</a
          >
        </li>

        <li>
          <a
            href="/repositories"
            class="block mt-4 md:inline-block md:mt-0 md:mr-6 hover:text-gray-200"
            >Repositories</a
          >
        </li>
        <li>
          <a
            href="/contacto"
            class="block mt-4 md:inline-block md:mt-0 md:mr-6 hover:text-gray-200"
            >Contact</a
          >
        </li>
      </ul>
    </div>
  </nav>
  <div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from "vue";

const storedDarkMode = localStorage.getItem("darkMode");
const darkMode = ref(storedDarkMode ? storedDarkMode === "true" : false);

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  document.body.classList.toggle("dark", darkMode.value);
};

onMounted(() => {
  document.body.classList.toggle("dark", darkMode.value);
});

watchEffect(() => {
  localStorage.setItem("darkMode", darkMode.value.toString());
});
</script>
