<script setup lang="ts">
const props = defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="the-title-wrapper">{{ title }}</div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.the-title-wrapper {
  @include centerRow;
  height: 20vh;
  width: 100%;
  font-size: $xxxlarge;
  font-family: var(--binggrae-font);
}
</style>
