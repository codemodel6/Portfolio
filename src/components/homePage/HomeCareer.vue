<script setup lang="ts">
import TheTitle from '../molecule/TheTitle.vue'
import CareerList from './CareerList.vue'
import { careerData } from '@/data/careerData'
</script>

<template>
  <div class="global-block">
    <TheTitle title="Career" />
    <div class="home-career-wrapper">
      <div class="company-wrapper">
        <span class="company-title">HNWorks</span>
        <span class="company-contents">현대오토에버 우수 협력사 기업</span>
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
  overflow: scroll;
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

  .company-contents {
    font-size: $small;
  }

  .company-day {
    font-size: $xsmall;
  }
}

.career-wrapper {
  @include centerColumn;
  width: 65%;
  height: 100%;
  background-color: blue;
}
</style>
