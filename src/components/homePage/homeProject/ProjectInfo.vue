<script setup lang="ts">
import type { ProjectProps } from '@/data/projectData'
import { handleStartAnimation } from '@/function/scroll'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{
  item: ProjectProps
  animation: string
}>()

const animationToggle = ref(false) // 애니메이션이 실행되었는지 여부를 추적

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 훅 기능 : 화면 마운트 시 함수를 실행시키는 훅
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
onMounted(() => {
  window.addEventListener('scroll', () =>
    handleStartAnimation(props.item.scrollData, animationToggle)
  )
})

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 훅 기능 : 화면 언마운트 시 함수를 제거하는 훅
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
onUnmounted(() => {
  window.removeEventListener('scroll', () =>
    handleStartAnimation(props.item.scrollData, animationToggle)
  )
})

// SCSS에 전달할 props
const styleObject = computed(() => ({
  '--project-color': props.item.projectColor,
  '--animation': animationToggle.value ? props.animation : 'none'
}))
</script>

<template>
  <div
    class="home-project-info"
    :class="props.item.reverse ? 'info-right-position' : 'info-left-position'"
    :style="styleObject"
  >
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
  position: relative;
  animation: var(--animation);
  animation-fill-mode: forwards;
  visibility: hidden;

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

/* .info-right-position {
  display: none;
  right: -55%;
}

.info-left-position {
  display: none;
  left: -55%;
} */
</style>
