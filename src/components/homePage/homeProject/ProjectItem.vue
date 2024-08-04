<script setup lang="ts">
import ProjectPreview from './ProjectPreview.vue'
import ProjectInfo from './ProjectInfo.vue'

const props = defineProps<{
  reverse: boolean // 왼쪽 오른쪽을 구분해줄 값
  infoColor: string
}>()
</script>

<template>
  <div class="project-item-wrapper" v-if="reverse">
    <ProjectPreview />
    <ProjectInfo :infoColor="infoColor" />
  </div>
  <div class="project-item-wrapper" v-else>
    <ProjectInfo :infoColor="infoColor" />
    <ProjectPreview />
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.project-item-wrapper {
  @include centerRow;
  width: 100%;
  height: 70vh;
  /* background-color: royalblue; */
}
</style>
