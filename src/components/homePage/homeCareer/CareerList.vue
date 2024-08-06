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
  display: flex;
  flex-direction: column;
  width: 85%;
  overflow: scroll;

  .career-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 1%;
    margin-bottom: 1%;
    padding-top: 1%;
    border-radius: 30px;

    .career-list-title {
      @include centerColumn;
      width: 100%;
      font-weight: bold;
      font-size: $xlarge;
      color: $Black100;
      margin-bottom: 2%;
    }

    .career-list-contents {
      padding: 2%;
      width: 85%;
      /* height: 100%; */
      font-size: $small;
      background-color: $White100;
      border-radius: 20px;
      margin-bottom: 5%;
      color: $Gray100;

      /* &:hover {
        height: 500px;
      } */
    }
  }
}
</style>
