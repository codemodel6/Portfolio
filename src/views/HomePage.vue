<script setup lang="ts">
import HomeMain from '@/components/homePage/homeMain/HomeMain.vue'
import HomeCareer from '@/components/homePage/homeCareer/HomeCareer.vue'
import HomeInfo from '@/components/homePage/homeInfo/HomeInfo.vue'
import HomeProject from '@/components/homePage/homeProject/HomeProject.vue'
import HomeIntro from '@/components/homePage/homeIntro/HomeIntro.vue'
</script>

<template>
  <div class="home-wrapper">
    <HomeMain />
    <HomeIntro />
    <HomeInfo />
    <HomeCareer />
    <HomeProject />
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';

.home-wrapper {
  @include centerColumn;
}
</style>
