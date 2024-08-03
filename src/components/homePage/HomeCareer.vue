<script setup lang="ts">
import TheTitle from '../molecule/TheTitle.vue'
</script>

<template>
  <div class="global-block">
    <TheTitle title="Career" />
    <div class="home-info-wrapper"></div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.home-info-wrapper {
  width: 100%;
  background-color: orange;
}
</style>
