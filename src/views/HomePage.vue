<script setup lang="ts">
import TheMarquee from '@/components/molecule/TheMarquee.vue'
</script>

<template lang="">
  <div class="global-first-block">
    <TheMarquee />
    <div class="home-wrapper">
      <div>hi</div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';

.home-wrapper {
  @include betweenRow;
  width: 100%;
  height: 100%;
  background-color: orange;
}
</style>
