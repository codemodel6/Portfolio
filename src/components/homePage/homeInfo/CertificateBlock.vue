<script setup lang="ts">
import type { CertificateProps } from '@/data/infoData'

const props = defineProps<{
  certificateData: CertificateProps[]
}>()
</script>

<template>
  <div class="home-certificate-block">
    <div class="certificate-wrapper">
      <span class="certificate-span" v-for="(item, index) in certificateData" :key="index">
        {{ item.title }}
      </span>
    </div>
    <div class="certificate-wrapper">
      <span class="certificate-span" v-for="(item, index) in certificateData" :key="index">
        {{ item.day }}
      </span>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.home-certificate-block {
  @include aroundRow;
  width: 100%;
  height: 210px;
  margin-bottom: 20px;
  border-radius: 15px;
  background-color: $Sub100;

  .certificate-wrapper {
    @include centerColumn;
    font-size: $xsmall;
    height: 100%;
    width: 30%;

    .certificate-span {
      @include centerColumn;
      height: 2.5rem;
      font-weight: bold;
    }
  }
}
</style>
