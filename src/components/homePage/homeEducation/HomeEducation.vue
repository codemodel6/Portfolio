<script setup lang="ts">
import TheTitle from '@/components/molecule/TheTitle.vue'
import CertificateBlock from './CertificateBlock.vue'
import EducationBlock from './EducationBlock.vue'
import { schoolData, codeData, certificateData, languageData } from '@/data/educationData'
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
        <div class="home-education-title">어학</div>
        <CertificateBlock :certificateData="languageData" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';
$education: '../../../assets/styles/image/careerImg/education.jpg';

.home-education-wrapper {
  @include centerColumn;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  color: $White100;
  background-image: url(#{$education});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(7, 16, 31, 0.44) 0%, rgba(10, 22, 40, 0.36) 45%, rgba(8, 18, 34, 0.48) 100%),
      linear-gradient(120deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0) 100%);
    pointer-events: none;
  }

  .home-education-with {
    position: relative;
    z-index: 1;
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 20px;

    @media (max-width: 768px) {
      width: 95%;
    }
  }

  .home-education-title {
    position: relative;
    font-size: $large;
    width: 100%;
    margin: 0 0 14px;
    font-weight: 700;
    letter-spacing: 0.03em;
    color: rgba($White100, 0.94);
    text-shadow: 0 8px 20px rgba(0, 0, 0, 0.24);
  }
}
</style>
