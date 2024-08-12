<script setup lang="ts">
import type { ProjectProps } from '@/data/projectData'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{
  item: ProjectProps
  animation: string
}>()

const animationToggle = ref(false) // 애니메이션이 실행되었는지 여부를 추적

// DOM 요소를 참조하기 위해 ref 사용
const previewRef = ref<HTMLDivElement | null>(null)

let observer: IntersectionObserver | null = null

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 훅 기능 : 화면 마운트 시 함수를 실행시키는 훅
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
onMounted(() => {
  // Intersection Observer 설정
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log('--->', entry.isIntersecting)
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          animationToggle.value = true
        } else {
          console.log('else')
          entry.target.classList.remove('active')
        }
      })
    },
    {
      threshold: 0.5 // 50% 이상 요소가 보이면 콜백 실행
    }
  )

  // 요소를 감시
  if (previewRef.value) {
    observer.observe(previewRef.value)
  }
})

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 훅 기능 : 화면 언마운트 시 함수를 실행시키는 훅
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
onUnmounted(() => {
  // 컴포넌트가 언마운트되면 옵저버 해제
  if (observer && previewRef.value) {
    observer.unobserve(previewRef.value)
  }
})

// SCSS에 전달할 props
const styleObject = computed(() => ({
  '--project-color': props.item.projectColor,
  '--animation': animationToggle.value ? props.animation : 'none'
}))
</script>

<template>
  <div
    ref="previewRef"
    class="home-project-preview"
    :class="props.item.reverse ? 'info-right-position' : 'info-left-position'"
    :style="styleObject"
  >
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
  animation-fill-mode: forwards;
  visibility: hidden;

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

.project-right-position {
  display: none;
  right: -55%;
}

.project-left-position {
  display: none;
  left: -55%;
}
</style>
