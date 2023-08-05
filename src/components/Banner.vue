<template>
  <h1 id="Technologies" class="text-4xl font-bold text-center py-12 mb-8">Técnologias</h1>
  <div  class="flex justify-center">
    <div class="grid grid-cols-6 gap-12">
      <div v-for="(imagen, index) in imagenes" :key="index" class="relative">
        <img
          :src="imagen.url"
          :alt="imagen.alt"
          class="w-full h-auto object-cover cursor-pointer rounded-lg shadow transform transition-transform duration-300 hover:scale-105"
          @click="abrirModal(index)"
        />
        <div
          v-if="imagenSeleccionada === index"
          class="modal-overlay fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-800"
        >
          <div
            class="modal-container bg-white w-96 p-6 rounded-lg shadow-lg transform transition-transform duration-300"
          >
            <img
              :src="imagen.url"
              :alt="imagen.alt"
              class="w-full h-auto cursor-pointer rounded-lg shadow"
              @click="abrirModal(index)"
            />
            <h2 class="text-2xl font-bold mb-4 text-black">
              {{ imagen.title }}
            </h2>
            <p class="mb-6 text-black">{{ imagen.descripcion }}</p>
            <button
              @click="cerrarModal"
              class="bg-gray-200 px-4 py-2 rounded-lg text-gray-800 font-semibold hover:bg-gray-300"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagenes: [
        {
          title: "C#",
          descripcion:
            "Soy Jaime, un apasionado Junior developer de C# con experiencia en proyectos utilizando la plataforma de Microsoft. Me gusta trabajar en equipo y colaborar en proyectos innovadores. Siempre estoy buscando aprender más y mejorar mis habilidades en el desarrollo de aplicaciones.",
          url: "https://images.ctfassets.net/23aumh6u8s0i/1IKVNqiLhNURzZXp652sEu/4379cfba19f0e19873af6074d3017f70/csharp",
        },
        {
          title: "NodeJs",
          descripcion:
            "Soy Jaime, un Junior developer  de Node.js apasionado y eficiente en la creación de aplicaciones web y de servidor. Con habilidades en JavaScript y frameworks como Express, disfruto resolviendo problemas y trabajando en equipo en proyectos innovadores. ¡Estoy emocionado por el futuro de Node.js!",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
        },
        {
          title: "Html , Css y JavaScript",
          descripcion:
            "Soy Jaime, un Junior developer   apasionado en HTML, CSS y JavaScript. Disfruto creando interfaces atractivas y funcionales con tecnologías web modernas y colaborando en proyectos innovadores en equipo y mejorando mis habilidades como desarrollador junior dia a dia .",
          url: "https://previews.123rf.com/images/vasilyrosca/vasilyrosca2004/vasilyrosca200400117/144227713-html5-css3-js-icon-set-web-development-logo-icon-set-of-html-css-and-javascript-programming.jpg",
        },
        {
          title: "TypeScript",
          descripcion:
            "Soy Jaime, un Junior developer apasionado por TypeScript, que ofrece una sintaxis más robusta y segura para crear aplicaciones web escalables y de alta calidad. Con habilidades en programación orientada a objetos , disfruto creando aplicaciones web eficientes  .",
          url: "https://raygun.com/blog/wp-content/uploads/2016/07/Callums-post-on-Typescript.png",
        },
        {
          title: "TypeORM",
          descripcion:
            "Soy Jaime, un Junior developer  apasionado por TypeORM, y JavaScript que me permite escribir código más limpio y mantenible para mi base de datos. Con habilidades en la creación de modelos de datos y consultas complejas, disfruto creando aplicaciones web eficientes y escalables .",
          url: "https://dd.engineering/blog/getting-started-with-typeorm/banner.png",
        },
        {
          title: "Sql-Server",
          descripcion:
            "Soy Jaime, un Junior developer apasionado por SQL Server y su capacidad para gestionar grandes cantidades de datos. Utilizo mi experiencia en SQL Server para diseñar y optimizar bases de datos escalables y eficientes. Además, disfruto colaborar en proyectos desafiantes que requieren soluciones innovadoras en la gestión de datos.",
          url: "data:image/jpeg;base64,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",
        },
        {
          title: "Git",
          descripcion:
            "Soy Jaime, un Junior developer apasionado por Git. Con habilidades en la creación de repositorios, ramas y fusiones, disfruto trabajando en equipo y manteniendo un historial claro de los cambios en mi código fuente.",
          url: "https://git-scm.com/images/logos/2color-lightbg@2x.png",
        },
        {
          title: "GitHub",
          descripcion:
            "Soy Jaime, un Junior developer apasionado por Github. Con habilidades en la colaboración en proyectos y en el manejo de repositorios, disfruto trabajando en equipo y compartiendo mi código fuente con otros desarrolladores.",
          url: "https://1000logos.net/wp-content/uploads/2018/11/GitHub-logo.jpg",
        },
      ],
      imagenSeleccionada: null,
    };
  },
  methods: {
    abrirModal(index) {
      this.imagenSeleccionada = index;
    },
    cerrarModal() {
      this.imagenSeleccionada = null;
    },
  },
};
</script>
