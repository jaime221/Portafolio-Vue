<template>
  <div id="Contact" class="flex flex-col items-center mt-8 p-8">
    <h2 class="text-3xl font-bold mb-6">Contacto</h2>
    <form
      @submit.prevent="enviarFormulario"
      class="w-96 bg-gray-800 p-4 rounded-lg"
    >
      <div class="mb-6">
        <label for="nombre" class="block mb-2 text-gray-100">Nombre:</label>
        <input
          type="text"
          id="nombre"
          v-model="nombre"
          @input="borrarError('nombre')"
          class="input-field w-full bg-gray-700 text-gray-100 px-3 py-2 rounded-lg"
        />
        <p v-if="errors.nombre" class="text-red-500 mt-1">
          {{ errors.nombre }}
        </p>
      </div>
      <div class="mb-6">
        <label for="email" class="block mb-2 text-gray-100">Email:</label>
        <input
          type="email"
          id="email"
          v-model="email"
          @input="borrarError('email')"
          class="input-field w-full bg-gray-700 text-gray-100 px-3 py-2 rounded-lg"
        />
        <p v-if="errors.email" class="text-red-500 mt-1">{{ errors.email }}</p>
      </div>
      <div class="mb-6">
        <label for="mensaje" class="block mb-2 text-gray-100">Mensaje:</label>
        <textarea
          id="mensaje"
          v-model="mensaje"
          @input="borrarError('mensaje')"
          rows="4"
          class="input-field w-full bg-gray-700 text-gray-100 px-3 py-2 rounded-lg"
        ></textarea>
        <p v-if="errors.mensaje" class="text-red-500 mt-1">
          {{ errors.mensaje }}
        </p>
      </div>
      <button
        type="submit"
        class="btn-submit bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Enviar
      </button>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import * as Yup from "yup";

export default {
  data() {
    return {
      nombre: "",
      email: "",
      mensaje: "",
      errors: {},
    };
  },
  methods: {
    enviarFormulario() {
      this.errors = {};

      if (!this.nombre.trim()) {
        this.errors.nombre = "El nombre es requerido";
      }

      if (!this.email.trim()) {
        this.errors.email = "El email es requerido";
      }

      if (!this.mensaje.trim()) {
        this.errors.mensaje = "El mensaje es requerido";
      }

      if (Object.keys(this.errors).length > 0) {
        return;
      }

      const schema = Yup.object().shape({
        nombre: Yup.string().required("El nombre es requerido"),
        email: Yup.string()
          .email("El email no es válido")
          .required("El email es requerido"),
        mensaje: Yup.string().required("El mensaje es requerido"),
      });

      schema
        .validate(
          {
            nombre: this.nombre,
            email: this.email,
            mensaje: this.mensaje,
          },
          { abortEarly: false }
        )
        .then(() => {
          Swal.fire({
            title: "¡Nos pondremos en contacto!",
            text: `Gracias, ${this.nombre}.`,
            icon: "success",
          });

          this.nombre = "";
          this.email = "";
          this.mensaje = "";
        })
        .catch((validationErrors) => {
          validationErrors.inner.forEach((error) => {
            this.$set(this.errors, error.path, error.message);
          });
        });
    },
    borrarError(campo) {
      if (this.errors[campo]) {
        delete this.errors[campo];
      }
    },
  },
};
</script>
