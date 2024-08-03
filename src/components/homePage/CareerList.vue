<script setup lang="ts">
import { careerData } from '@/data/careerData'
</script>

<template>
  <div class="career-list-wrapper">
    <div class="career-block" v-for="(it, idx) in careerData" :key="idx">
      <div class="career-list-title">{{ it.title }}</div>
      <div class="career-list-contents">{{ it.contents }}</div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.career-list-wrapper {
  @include centerColumn;
  width: 85%;
  height: 3000px;
  background-color: orange;
  overflow: scroll;

  .career-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 500px;
    background-color: gray;
    margin-bottom: 50px;

    .career-list-title {
      height: 20%;
      font-weight: bold;
      font-size: $large;
    }

    .career-list-contents {
      height: 50%;
      background-color: green;
      font-size: $small;
    }
  }
}
</style>
