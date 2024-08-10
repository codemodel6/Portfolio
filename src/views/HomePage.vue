<script setup lang="ts">
import HomeMain from '@/components/homePage/homeMain/HomeMain.vue'
import HomeCareer from '@/components/homePage/homeCareer/HomeCareer.vue'
import HomeInfo from '@/components/homePage/homeInfo/HomeInfo.vue'
import HomeProject from '@/components/homePage/homeProject/HomeProject.vue'
import HomeIntro from '@/components/homePage/homeIntro/HomeIntro.vue'
import TheEmpty from '@/components/molecule/TheEmpty.vue'
</script>

<template>
  <div class="home-wrapper">
    <HomeMain />
    <HomeIntro />
    <HomeCareer />
    <HomeProject />
    <HomeInfo />
    <TheEmpty height="10vh" />
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';

.home-wrapper {
  @include centerColumn;
}
</style>
