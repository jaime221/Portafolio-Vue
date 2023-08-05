<template>
  <h1 id="Repositories" class="text-4xl font-bold text-center mb-8 py-12">Mis Repositorios</h1>
  <div
    
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
  >
    <div
      v-for="repo in repositories"
      :key="repo.name"
      class="p-6 rounded-lg shadow-xl bg-gray-800 hover:bg-gray-700"
    >
      <div class="flex items-center mb-4">
        <img
          :src="repo.imageUrl"
          :alt="repo.name"
          class="h-10 w-10 rounded-full object-cover mr-2"
        />
        <h3 class="text-lg font-semibold text-white">{{ repo.name }}</h3>
      </div>
      <p class="mb-4 text-white">{{ repo.description }}</p>
      <a
        :href="repo.url"
        target="_blank"
        class="inline-block bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition-colors duration-300"
        >Ver repositorio</a
      >
    </div>
  </div>
</template>

<style>
.container {
  max-width: 1140px;
}

.grid {
  margin-top: 2rem;
}

.grid > div {
  text-align: center;
}

h3 {
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
}
</style>
<script>
export default {
  data() {
    return {
      repositories: [
        {
          name: "Calculadora",
          description: "Calculadora usando Vue y TypeScript",
          url: "https://github.com/jaime221/Calculadora-Vue",
          imageUrl: "https://avatars.githubusercontent.com/u/123993748?v=4",
        },
        {
          name: "Publicacion de Productos",
          description: "Publicacion de Productos usando C# y estructura MVC5",
          url: "https://github.com/jaime221/Publicaciones-Productos",
          imageUrl: "https://avatars.githubusercontent.com/u/123993748?v=4",
        },
        {
          name: "Validacion de Correo",
          description: "Validacion de correo usando TypeScript",
          url: "https://github.com/jaime221/Validacion-Correo-TypeScript",
          imageUrl: "https://avatars.githubusercontent.com/u/123993748?v=4",
        },
        {
          name: "Crud Api",
          description: "Crud Api usando TypeScript y MySql",
          url: "https://github.com/jaime221/Crud-Api-TypeScript",
          imageUrl: "https://avatars.githubusercontent.com/u/123993748?v=4",
        },
        {
          name: "Crud Api NestJs",
          description: "Crud Api usando NestJs y MySql",
          url: "https://github.com/jaime221/Crud-Api-NestJs",
          imageUrl: "https://avatars.githubusercontent.com/u/123993748?v=4",
        },
      ],
    };
  },
};
</script>
