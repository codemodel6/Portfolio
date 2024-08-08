<script setup lang="ts"></script>

<template>
  <div class="intro-page-wrapper">
    <span class="intro-word">C</span>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/color/ColorNote.scss';

.intro-page-wrapper {
  height: 100vh;
  min-width: 100vh;
  width: 100%;

  .intro-word {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 20rem;
    animation: rotate-word 3s ease-out;
    transform: translate(-50%, -50%);
    animation-fill-mode: forwards;
  }
}

@keyframes rotate-word {
  0% {
    transform: translate(-50%, -50%);
  }

  50% {
    transform: translate(-50%, -50%) rotateY(1080deg);
    left: 50%;
  }

  100% {
    transform: translate(-50%, -50%) rotateY(1080deg);
    left: 20%;
  }
}
</style>
