<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import ProjectPreview from './ProjectPreview.vue'
import ProjectInfo from './ProjectInfo.vue'
import type { ProjectProps } from '@/data/projectData'

const props = defineProps<{
  item: ProjectProps
}>()
</script>

<template>
  <div class="project-item-wrapper" v-if="item.reverse">
    <ProjectPreview :item="item" animation="bounce-left 1.3s ease-in-out" />
    <ProjectInfo :item="item" animation="bounce-right 1.3s ease-in-out" />
  </div>
  <div class="project-item-wrapper" v-else>
    <ProjectInfo :item="item" animation="bounce-left 1.3s ease-in-out" />
    <ProjectPreview :item="item" animation="bounce-right 1.3s ease-in-out" />
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

@keyframes bounce-right {
  0% {
    right: -55%;
  }

  70% {
    right: 0%;
  }

  85% {
    right: -2%;
  }

  90% {
    right: 0%;
  }

  96% {
    right: -1%;
  }

  100% {
    right: 0%;
  }
}

@keyframes bounce-left {
  0% {
    left: -55%;
  }

  70% {
    left: 0%;
  }

  85% {
    left: -2%;
  }

  90% {
    left: 0%;
  }

  96% {
    left: -1%;
  }

  100% {
    left: 0%;
  }
}
</style>
