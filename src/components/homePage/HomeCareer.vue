<script setup lang="ts">
import TheTitle from '../molecule/TheTitle.vue'
import CareerList from './CareerList.vue'
</script>

<template>
  <div class="global-block">
    <TheTitle title="Career" />
    <div class="home-career-wrapper">
      <div class="company-wrapper">
        <span class="company-title">HNWorks</span>
        <span class="company-day">2023.05 - 재직중</span>
      </div>
      <div class="career-wrapper">
        <CareerList />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.home-career-wrapper {
  @include betweenRow;
  width: 100%;
  height: 100%;
}

.company-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 100%;
  background-color: red;

  .company-title {
    font-size: $xxlarge;
  }

  .company-day {
    font-size: $small;
  }
}

.career-wrapper {
  @include centerRow;
  width: 65%;
  height: 100%;
  background-color: blue;
}
</style>
