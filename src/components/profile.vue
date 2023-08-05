<template>
  <div
    id="/"
    class="flex flex-col items-center justify-center background-image h-screen bg-gray-200"
  >
    <div class="text-5xl text-white mb-6 animate-bounce">I'M JAIME PÉREZ</div>
    <div
      class="text-4xl text-red-700 font-semibold mb-8 animate-fade-in"
      style="color: #fb7171"
    >
      {{ text }}
    </div>
    <div class="text-6xl animate-slide-in-left-opacity" style="color: #f10a0a">
      Backend Development
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "HELLO",
    };
  },
};
</script>

<style>
@keyframes bounce {
  0%,
  100% {
    transform: translateY(-20%);
  }
  50% {
    transform: translateY(0);
  }
}

.animate-bounce {
  animation: bounce 1s ease-in-out infinite;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: slide-in-left 1s ease;
  animation-fill-mode: forwards;
}

@keyframes slide-in-left {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in-left-opacity {
  animation: slide-in-left 1s ease;
  animation-fill-mode: forwards;
}
</style>
