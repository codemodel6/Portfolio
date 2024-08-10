<script setup lang="ts">
import TheTitle from '@/components/molecule/TheTitle.vue'
import CertificateBlock from './CertificateBlock.vue'
import InfoBlock from './InfoBlock.vue'
import { schoolData, codeData, certificateData } from '@/data/infoData'
</script>

<template>
  <div class="global-over-block">
    <TheTitle title="Education" />
    <div class="home-info-wrapper">
      <div class="home-info-with">
        <div class="home-info-title">학력</div>
        <InfoBlock :infoData="schoolData" />
        <InfoBlock :infoData="codeData" />
        <div class="home-info-title">자격증</div>
        <CertificateBlock :certificateData="certificateData" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.home-info-wrapper {
  @include centerColumn;
  width: 100%;
  height: 100vh;
  background-color: #b0bfef;
  color: $Black100;

  .home-info-with {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
  }

  .home-info-title {
    font-size: $large;
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
