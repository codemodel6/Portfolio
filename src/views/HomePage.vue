<script setup lang="ts">
import HomeMain from '@/components/homePage/HomeMain.vue'
import HomeCareer from '@/components/homePage/HomeCareer.vue'
import HomeInfo from '@/components/homePage/homeInfo/HomeInfo.vue'
</script>

<template>
  <div class="home-wrapper">
    <HomeMain />
    <HomeCareer />
    <HomeInfo />
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';

.home-wrapper {
  @include centerColumn;
}
</style>
