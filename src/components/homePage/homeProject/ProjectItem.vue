<script setup lang="ts">
import ProjectPreview from './ProjectPreview.vue'
import ProjectInfo from './ProjectInfo.vue'
import type { ProjectProps } from '@/data/projectData'

const props = defineProps<{
  item: ProjectProps
}>()
</script>

<template>
  <div class="project-item-wrapper" v-if="item.reverse">
    <ProjectPreview :item="item" />
    <ProjectInfo :item="item" />
  </div>
  <div class="project-item-wrapper" v-else>
    <ProjectInfo :item="item" />
    <ProjectPreview :item="item" />
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.project-item-wrapper {
  @include centerRow;
  width: 100%;
  height: 70vh;
}
</style>
