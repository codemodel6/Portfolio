<script setup lang="ts">
import TheTitle from '@/components/molecule/TheTitle.vue'
import ProjectItem from './ProjectItem.vue'
</script>

<template>
  <div class="home-project-wrapper">
    <TheTitle title="Project" />
    <ProjectItem :reverse="false" infoColor="#0705ef" />
    <ProjectItem :reverse="true" infoColor="#ff0000" />
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.home-project-wrapper {
  display: flex;
  flex-direction: column;
  padding-top: 90px;
  width: 90%;
}
</style>
