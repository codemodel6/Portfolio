<script setup lang="ts">
import type { ProjectProps } from '@/data/projectData'

const props = defineProps<{
  item: ProjectProps
  animation: string
}>()

// SCSS에 전달할 props
const styleObject = {
  '--project-color': props.item.projectColor,
  '--animation': props.animation
}
</script>

<template>
  <div class="home-project-preview" :style="styleObject">
    <div class="project-block">
      <img :src="item.img1" alt="첫번째 gif" />
      <span class="project-block-title"> {{ item.preview1 }}</span>
    </div>
    <div class="project-block">
      <span class="project-block-title"> {{ item.preview2 }}</span>
      <img :src="item.img2" alt="두번째 gif" />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.home-project-preview {
  @include aroundColumn;
  width: 50%;
  height: 100%;
  position: relative;
  animation: var(--animation);

  .project-block {
    @include aroundRow;
    width: 100%;
    height: 40%;

    .project-block-title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 40%;
      font-size: $small;
      font-weight: bold;
      white-space: pre-line;
      color: var(--project-color);
    }

    img {
      width: 50%;
      height: 100%;
    }
  }
}
</style>
