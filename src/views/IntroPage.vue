<script setup lang="ts"></script>

<template>
  <div class="intro-page-wrapper"></div>
</template>

<style lang="scss">
.intro-page-wrapper {
  height: 100vh;
  min-width: 100vh;
  width: 100%;
  font-size: 30rem;
  background-color: orange;
}

@keyframes rotate-and-shrink {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.5) translateY(50px);
  }
  100% {
    transform: rotate(360deg) scale(0.1) translateX(200px);
  }
}
</style>
