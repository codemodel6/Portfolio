<script setup lang="ts">
import CertificateBlock from './CertificateBlock.vue'
import InfoBlock from './InfoBlock.vue'
import { schoolData, codeData, certificateData } from '@/data/infoData'
</script>

<template>
  <div class="global-block">
    <div class="home-info-wrapper">
      <div class="home-info-title">학력</div>
      <InfoBlock :infoData="schoolData" />
      <InfoBlock :infoData="codeData" />
      <div class="home-info-title">자격증</div>
      <CertificateBlock :certificateData="certificateData" />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.home-info-wrapper {
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  background-color: red;

  .home-info-title {
    font-size: $large;
    width: 100%;
    margin-bottom: 15px;
  }
}
</style>
