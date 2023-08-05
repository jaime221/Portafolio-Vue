<template>
  <slot> </slot>

  <!--Footer container-->
  <footer
    class="bg-gray-100 text-center dark:bg-gray-900 text-gray-900 dark:text-gray-100"
  >
    <div class="container mx-auto px-4 py-8">
      <p class="text-base font-medium mb-2">
        © 2023 Todos los derechos reservados. Jaime Perez.
      </p>
      <div class="flex justify-center">
        <a
          href="#"
          class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mx-3"
        >
          Términos y condiciones
        </a>
        <span class="text-gray-500 dark:text-gray-400"> | </span>
        <a
          href="#"
          class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mx-3"
        >
          Política de privacidad
        </a>
      </div>
    </div>
  </footer>
</template>
