<script setup lang="ts">
import type { ProjectProps } from '@/data/projectData'

const props = defineProps<{
  item: ProjectProps
}>()

const styleObject = {
  '--project-color': props.item.projectColor
}
</script>

<template>
  <div class="home-project-info" :style="styleObject">
    <span class="project-title">{{ item.title }}</span>
    <span class="project-sub-title">{{ item.subTitle }}</span>
    <span class="project-contents">
      {{ item.content }}
    </span>
    <span class="project-tool">
      <span class="tool-name">[배포] </span>
      <a :href="item.link1" target="_blank">{{ item.link1 }}</a>
    </span>
    <span class="project-tool">
      <span class="tool-name">[깃헙] </span>
      <a :href="item.link2" target="_blank">{{ item.link2 }}</a>
    </span>
    <span class="project-tool">
      <span class="tool-name">[회고] </span>
      <a :href="item.link3" target="_blank">{{ item.link3 }}</a>
    </span>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.home-project-info {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  background-color: var(--project-color);
  padding-top: 8%;
  padding-left: 8%;
  color: white;

  .project-title {
    font-size: $xlarge;
    margin-bottom: 15px;
    font-weight: bold;
  }

  .project-sub-title {
    font-size: $xsmall;
    margin-bottom: 30px;
  }

  .project-contents {
    font-size: $xsmall;
    margin-bottom: 30px;
    white-space: pre-line;
  }

  .project-tool {
    font-size: $xsmall;
    margin-bottom: 5px;

    .tool-name {
      font-weight: bold;
    }
  }
}
</style>
