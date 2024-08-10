<script setup lang="ts">
import type { InfoDataProps } from '@/data/infoData'

const props = defineProps<{
  infoData: InfoDataProps
}>()
</script>

<template>
  <div class="home-info-block">
    <div class="info-block-title-wrapper">
      <span class="info-block-title">{{ infoData.title }}</span>
      <span class="info-block-title">{{ infoData.day }}</span>
    </div>
    <div class="info-block-contents-wrapper">
      <span class="info-block-contents" v-for="(it, idx) in infoData.contentsList" :key="idx">{{
        it.contents
      }}</span>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.home-info-block {
  @include betweenRow;
  width: 100%;
  height: 28%;
  background-color: $White100;
  margin-bottom: 3%;
  border-radius: 3%;

  .info-block-title-wrapper {
    @include centerColumn;
    width: 35%;
    height: 100%;

    .info-block-title {
      font-size: $xsmall;
      font-weight: bold;
      margin-top: 2%;
      margin-bottom: 2%;
    }
  }

  .info-block-contents-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 65%;
    height: 100%;
    padding-left: 10%;

    .info-block-contents {
      font-size: $xsmall;
      margin-top: 1%;
      margin-bottom: 1%;
    }
  }
}
</style>
