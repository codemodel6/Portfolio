<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import type { CareerProject } from '@/data/careerData'

const props = defineProps<{
  careerProjects: CareerProject[]
}>()

const emit = defineEmits<{
  (e: 'project-change', projectIndex: number): void
}>()

const careerListRef = ref<HTMLDivElement | null>(null)
const projectSectionRefs = ref<HTMLElement[]>([])

const setProjectSectionRef = (
  element: Element | ComponentPublicInstance | null,
  index: number
) => {
  if (!element) {
    return
  }

  const sectionElement = '$el' in element ? (element.$el as HTMLElement) : (element as HTMLElement)

  projectSectionRefs.value[index] = sectionElement
}

const updateActiveProject = () => {
  const container = careerListRef.value

  if (!container || projectSectionRefs.value.length === 0) {
    return
  }

  const scrollCenter = container.scrollTop + container.clientHeight * 0.35
  let activeIndex = 0

  projectSectionRefs.value.forEach((section, index) => {
    if (section.offsetTop <= scrollCenter) {
      activeIndex = index
    }
  })

  emit('project-change', activeIndex)
}

const handleScroll = () => {
  updateActiveProject()
}

onMounted(async () => {
  await nextTick()
  updateActiveProject()
})
</script>

<template>
  <div ref="careerListRef" class="career-list-wrapper" @scroll="handleScroll">
    <section
      v-for="(project, projectIndex) in careerProjects"
      :key="`${project.companyTitle}-${projectIndex}`"
      :ref="(element) => setProjectSectionRef(element, projectIndex)"
      class="project-section"
    >
      <div class="project-divider">
        <span class="project-divider-line"></span>
        <span class="project-divider-text">{{ project.companyTitle }}</span>
        <span class="project-divider-line"></span>
      </div>

      <div class="career-block" v-for="(it, idx) in project.careers" :key="`${project.companyTitle}-${idx}`">
        <div class="career-list-title">{{ it.title }}</div>
        <div class="career-list-contents">{{ it.contents }}</div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.career-list-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1rem 0.75rem 2rem 0.75rem;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

.project-section {
  display: flex;
  flex-direction: column;
  padding-bottom: 2.5rem;
}

.project-divider {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-bottom: 2rem;
  color: rgba($White100, 0.92);
}

.project-divider-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, rgba($White100, 0) 0%, rgba($White100, 0.8) 50%, rgba($White100, 0) 100%);
}

.project-divider-text {
  flex-shrink: 0;
  padding: 0.45rem 1.1rem;
  border: 1px solid rgba($White100, 0.45);
  border-radius: 999px;
  background-color: rgba($Black100, 0.28);
  backdrop-filter: blur(6px);
  font-size: $small;
  font-weight: bold;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.career-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 1.8rem;
  padding: 0;

  .career-list-title {
    display: block;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: $xlarge;
    color: rgba($White100, 0.96);
    margin-bottom: 0.9rem;
    white-space: pre-line;
    text-shadow: 0 8px 20px rgba(0, 0, 0, 0.28);
  }

  .career-list-contents {
    width: 100%;
    padding: 1rem 1.2rem;
    font-size: $small;
    line-height: 1.9;
    white-space: pre-line;
    border: 1px solid rgba($White100, 0.22);
    border-radius: 22px;
    background-color: rgba($Black100, 0.2);
    backdrop-filter: blur(6px);
    color: rgba($White100, 0.84);
    box-shadow: inset 0 1px 0 rgba($White100, 0.08);
  }
}

.career-list-wrapper::-webkit-scrollbar {
  width: 10px;
}

.career-list-wrapper::-webkit-scrollbar-track {
  background: transparent;
}

.career-list-wrapper::-webkit-scrollbar-thumb {
  border: 2px solid transparent;
  border-radius: 999px;
  background-clip: padding-box;
  background-color: rgba($White100, 0.22);
}
</style>
