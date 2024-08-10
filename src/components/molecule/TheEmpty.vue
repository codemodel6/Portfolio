<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  height: string
}>()

// SCSS에 전달할 props
const styleObject = computed(() => ({
  '--empty-height': props.height
}))
</script>

<template>
  <div class="the-empty-wrapper" :style="styleObject"></div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.the-empty-wrapper {
  height: var(--empty-height);
  width: 100%;
}
</style>
