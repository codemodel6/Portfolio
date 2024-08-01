<script setup lang="ts">
import TheMarquee from '@/components/molecule/TheMarquee.vue'
</script>

<template lang="">
  <div class="global-first-block">
    <TheMarquee />
    <div class="home-wrapper">
      <div class="home-image-wrapper">hi</div>
      <div class="home-intro-wrapper">dd?</div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';

.home-wrapper {
  @include betweenRow;
  width: 100%;
  height: 100%;

  .home-image-wrapper {
    width: 50%;
    height: 100%;
    background-color: blue;
  }

  .home-intro-wrapper {
    width: 50%;
    height: 100%;
    background-color: yellow;
  }
}
</style>
