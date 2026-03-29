<script setup lang="ts">
import { computed, ref } from 'vue'
import { careerProjects } from '@/data/careerData'
import TheTitle from '../../molecule/TheTitle.vue'
import CareerList from './CareerList.vue'

const currentProjectIndex = ref(0)

const currentProject = computed(() => careerProjects[currentProjectIndex.value])

const handleProjectChange = (projectIndex: number) => {
  currentProjectIndex.value = projectIndex
}
</script>

<template>
  <div class="global-block">
    <TheTitle title="Career" />
    <div class="home-career-wrapper">
      <Transition name="company-fade" mode="out-in">
        <div class="company-wrapper" :key="currentProjectIndex">
          <span class="company-title">{{ currentProject.companyTitle }}</span>
          <span class="company-contents">{{ currentProject.companyContents }}</span>
          <span class="company-day">{{ currentProject.companyDay }}</span>
        </div>
      </Transition>
      <div class="career-wrapper">
        <CareerList :career-projects="careerProjects" @project-change="handleProjectChange" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';
$building: '../../../assets/styles/image/careerImg/building.jpg';

.home-career-wrapper {
  @include betweenRow;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url(#{$building});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(110deg, rgba(6, 10, 18, 0.82) 0%, rgba(6, 10, 18, 0.68) 38%, rgba(6, 10, 18, 0.52) 100%),
      rgba(0, 0, 0, 0.16);
    pointer-events: none;
  }
}

.company-wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 100%;
  margin-left: 2.75rem;
  padding-right: 1.5rem;
  color: $White100;

  .company-title {
    margin-bottom: 0.55rem;
    font-weight: 700;
    font-size: $xxxlarge;
    letter-spacing: 0.01em;
    line-height: 1.05;
    text-align: center;
    text-shadow: 0 6px 18px rgba(0, 0, 0, 0.28);
  }

  .company-contents {
    max-width: 20rem;
    margin-bottom: 0.65rem;
    font-size: $medium;
    line-height: 1.55;
    text-align: center;
    color: rgba($White100, 0.76);
    text-shadow: 0 4px 14px rgba(0, 0, 0, 0.22);
  }

  .company-day {
    padding-top: 0.3rem;
    font-size: $small;
    letter-spacing: 0.05em;
    text-align: center;
    color: rgba($White100, 0.62);
    text-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
}

.company-fade-enter-active,
.company-fade-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}

.company-fade-enter-from,
.company-fade-leave-to {
  opacity: 0;
  transform: translateY(14px);
}

.career-wrapper {
  @include centerColumn;
  position: relative;
  z-index: 1;
  width: 65%;
  height: 100%;
  padding: 2.5rem 2.75rem 2.5rem 0.5rem;
}
</style>
