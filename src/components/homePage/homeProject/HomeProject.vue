<script setup lang="ts">
import TheTitle from '@/components/molecule/TheTitle.vue'
import ProjectItem from './ProjectItem.vue'
import { ProjectData } from '@/data/projectData'
</script>

<template>
  <div class="home-project-wrapper">
    <TheTitle title="Project" />
    <ProjectItem v-for="(item, index) in ProjectData" :key="index" :item="item" />
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
