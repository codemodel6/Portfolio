<script setup lang="ts">
import type { EducationDataProps } from '@/data/educationData'

const props = defineProps<{
  educationData: EducationDataProps
}>()
</script>

<template>
  <div class="home-education-block">
    <div class="education-block-title-wrapper">
      <span class="education-block-title">{{ educationData.title }}</span>
      <span class="education-block-title">{{ educationData.day }}</span>
    </div>
    <div class="education-block-contents-wrapper">
      <span
        class="education-block-contents"
        v-for="(it, idx) in educationData.contentsList"
        :key="idx"
        >{{ it.contents }}</span
      >
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.home-education-block {
  @include betweenRow;
  width: 100%;
  height: 28%;
  margin-bottom: 3%;
  border: 1px solid rgba($White100, 0.14);
  border-radius: 24px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0%, rgba(181, 212, 255, 0.06) 100%);
  backdrop-filter: blur(8px);
  box-shadow:
    inset 0 1px 0 rgba($White100, 0.06),
    0 18px 36px rgba(0, 0, 0, 0.16);

  .education-block-title-wrapper {
    @include centerColumn;
    width: 35%;
    height: 100%;
    padding: 0 1rem;
    border-right: 1px solid rgba($White100, 0.1);

    .education-block-title {
      font-size: $xsmall;
      font-weight: bold;
      margin-top: 2%;
      margin-bottom: 2%;
      color: rgba($White100, 0.94);
      text-align: center;
      line-height: 1.6;
      white-space: pre-line;
      text-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
    }
  }

  .education-block-contents-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 65%;
    height: 100%;
    padding: 0 2rem 0 2.25rem;

    .education-block-contents {
      font-size: $xsmall;
      margin-top: 0.45rem;
      margin-bottom: 0.45rem;
      line-height: 1.7;
      color: rgba($White100, 0.82);
      text-shadow: 0 4px 12px rgba(0, 0, 0, 0.16);
    }
  }
}
</style>
