<script setup lang="ts">
import type { ProjectProps } from '@/data/projectData'

const props = defineProps<{
  item: ProjectProps
}>()

const styleObject = {
  '--info-color': props.item.infoColor
}
</script>

<template>
  <div class="home-project-info" :style="styleObject">
    <span class="project-title">{{ item.title }}</span>
    <span class="project-sub-title">{{ item.subTitle }}</span>
    <span class="project-contents">
      {{ item.content }}
    </span>
    <span class="project-tool"> <span class="tool-name">[배포]</span>{{ item.link1 }}</span>
    <span class="project-tool"> <span class="tool-name">[배포]</span>{{ item.link2 }}</span>
    <span class="project-tool"> <span class="tool-name">[배포]</span>{{ item.link3 }}</span>
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
  background-color: var(--info-color);
  padding-top: 8%;
  padding-left: 8%;
  color: white;

  .project-title {
    font-size: $xlarge;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .project-sub-title {
    font-size: $xsmall;
    margin-bottom: 30px;
  }

  .project-contents {
    font-size: $xsmall;
    margin-bottom: 30px;
  }

  .project-tool {
    font-size: $xsmall;

    .tool-name {
      font-weight: bold;
    }
  }
}
</style>
