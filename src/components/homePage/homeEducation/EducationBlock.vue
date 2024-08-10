<script setup lang="ts">
import type { EducationDataProps } from '@/data/educationData'

const props = defineProps<{
  educationData: EducationDataProps
}>()
</script>

<template>
  <div class="home-education-block">
    <div class="education-block-title-wrapper">
      <span class="education-block-title">{{ educationData.title }}</span>
      <span class="education-block-title">{{ educationData.day }}</span>
    </div>
    <div class="education-block-contents-wrapper">
      <span
        class="education-block-contents"
        v-for="(it, idx) in educationData.contentsList"
        :key="idx"
        >{{ it.contents }}</span
      >
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.home-education-block {
  @include betweenRow;
  width: 100%;
  height: 28%;
  background-color: $White100;
  margin-bottom: 3%;
  border-radius: 10px;

  .education-block-title-wrapper {
    @include centerColumn;
    width: 35%;
    height: 100%;

    .education-block-title {
      font-size: $xsmall;
      font-weight: bold;
      margin-top: 2%;
      margin-bottom: 2%;
    }
  }

  .education-block-contents-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 65%;
    height: 100%;
    padding-left: 10%;

    .education-block-contents {
      font-size: $xsmall;
      margin-top: 1%;
      margin-bottom: 1%;
    }
  }
}
</style>
