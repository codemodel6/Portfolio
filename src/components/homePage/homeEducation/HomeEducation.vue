<script setup lang="ts">
import TheTitle from '@/components/molecule/TheTitle.vue'
import CertificateBlock from './CertificateBlock.vue'
import EducationBlock from './EducationBlock.vue'
import { schoolData, codeData, certificateData } from '@/data/educationData'
</script>

<template>
  <div class="global-over-block">
    <TheTitle title="Education" />
    <div class="home-education-wrapper">
      <div class="home-education-with">
        <div class="home-education-title">학력</div>
        <EducationBlock :educationData="schoolData" />
        <EducationBlock :educationData="codeData" />
        <div class="home-education-title">자격증</div>
        <CertificateBlock :certificateData="certificateData" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.home-education-wrapper {
  @include centerColumn;
  width: 100%;
  height: 100vh;
  background-color: #b0bfef;
  color: $Black100;

  .home-education-with {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 20px;

    @media (max-width: 768px) {
      width: 80%;
    }
  }

  .home-education-title {
    font-size: $large;
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
