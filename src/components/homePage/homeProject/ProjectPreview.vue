<script setup lang="ts">
import type { ProjectProps } from '@/data/projectData'
import { handleStartAnimation } from '@/function/scroll'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{
  item: ProjectProps
  animation: string
}>()

const animationToggle = ref(false) // 애니메이션이 실행되었는지 여부를 추적
const startScrollData = 3500 // 애니메이션을 실행할 스크롤 위치

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 훅 기능 : 화면 마운트 시 함수를 실행시키는 훅
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
onMounted(() => {
  // 익명 함수나 화살표 함수를 사용하여 handleStartAnimation 호출
  window.addEventListener('scroll', () => handleStartAnimation(startScrollData, animationToggle))
})

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 훅 기능 : 화면 언마운트 시 함수를 제거하는 훅
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
onUnmounted(() => {
  // 클린업: 이벤트 리스너 제거 (옵션)
  window.removeEventListener('scroll', () => handleStartAnimation(startScrollData, animationToggle))
})

// SCSS에 전달할 props
const styleObject = computed(() => ({
  '--project-color': props.item.projectColor,
  '--animation': animationToggle.value ? props.animation : 'none'
}))
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
