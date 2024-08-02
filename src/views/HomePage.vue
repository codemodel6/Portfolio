<script setup lang="ts">
import HomeMain from '@/components/homePage/HomeMain.vue'
import HomeInfo from '@/components/homePage/HomeInfo.vue'
</script>

<template>
  <div class="home-wrapper">
    <HomeMain />
    <HomeInfo />
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
.home-wrapper {
  @include centerColumn;
  width: 90%;
}
</style>
