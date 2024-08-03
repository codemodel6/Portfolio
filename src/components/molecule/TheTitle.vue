<script setup lang="ts">
const props = defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="home-title-wrapper">{{ title }}</div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.home-title-wrapper {
  @include centerRow;
  height: 20%;
  width: 100%;
  font-size: $xxxlarge;
  font-family: var(--shilla-font);
}
</style>
