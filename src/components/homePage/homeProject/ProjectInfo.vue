<script setup lang="ts">
import type { ProjectProps } from '@/data/projectData'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{
  item: ProjectProps
  animation: string
}>()

const animationToggle = ref(false) // 애니메이션이 실행되었는지 여부를 추적

// DOM 요소를 참조하기 위해 ref 사용
const infoRef = ref<HTMLDivElement | null>(null)

let observer: IntersectionObserver | null = null

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 훅 기능 : 화면 마운트 시 함수를 실행시키는 훅
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
onMounted(() => {
  // Intersection Observer 설정
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('여기?')
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
  if (infoRef.value) {
    observer.observe(infoRef.value)
  }
})

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 훅 기능 : 화면 언마운트 시 함수를 실행시키는 훅
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
onUnmounted(() => {
  // 컴포넌트가 언마운트되면 옵저버 해제
  if (observer && infoRef.value) {
    observer.unobserve(infoRef.value)
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
    ref="infoRef"
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
