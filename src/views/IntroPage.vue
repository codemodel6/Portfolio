<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

onMounted(() => {
  const router = useRouter()

  // 6초 후 홈으로 이동
  setTimeout(() => {
    router.push('/home')
  }, 6000)
})
</script>

<template>
  <div class="intro-page-wrapper">
    <span class="intro-first-word">C</span>
    <span>odemodel6</span>
    <span>Portfolio</span>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/color/ColorNote.scss';

.intro-page-wrapper {
  height: 100vh;
  min-width: 100vh;
  width: 100%;
  background-color: black;
  color: white;

  .intro-first-word {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 10rem;
    animation: rotate-word 3s ease-out;
    transform: translate(-50%, -50%);
    animation-fill-mode: forwards;
  }

  span:nth-child(2) {
    position: absolute;
    font-size: 10rem;
    top: 42%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    animation: opacity-word 1s ease-in;
    animation-delay: 3.2s;
    animation-fill-mode: forwards;
  }

  span:nth-child(3) {
    position: absolute;
    font-size: 10rem;
    top: 62%;
    left: 65%;
    transform: translate(-50%, -50%);
    opacity: 0;
    animation: opacity-word 1s ease-in;
    animation-delay: 4.2s;
    animation-fill-mode: forwards;
  }
}

@keyframes rotate-word {
  0% {
    transform: translate(-50%, -50%);
  }

  70% {
    top: 50%;
    transform: translate(-50%, -50%) rotateY(1080deg);
    left: 50%;
  }

  100% {
    top: 42%;
    transform: translate(-50%, -50%) rotateY(1080deg);
    left: 20%;
  }
}

@keyframes opacity-word {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
