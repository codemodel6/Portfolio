<script setup lang="ts">
import type { CertificateProps } from '@/data/educationData'

const props = defineProps<{
  certificateData: CertificateProps[]
}>()
</script>

<template>
  <div class="home-certificate-block">
    <div class="certificate-wrapper">
      <span class="certificate-span" v-for="(item, index) in certificateData" :key="index">
        {{ item.title }}
      </span>
    </div>
    <div class="certificate-wrapper">
      <span class="certificate-span" v-for="(item, index) in certificateData" :key="index">
        {{ item.day }}
      </span>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.home-certificate-block {
  @include aroundRow;
  width: 100%;
  height: 210px;
  margin-bottom: 20px;
  border: 1px solid rgba($White100, 0.14);
  border-radius: 24px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(160, 199, 255, 0.06) 100%);
  backdrop-filter: blur(8px);
  box-shadow:
    inset 0 1px 0 rgba($White100, 0.06),
    0 18px 36px rgba(0, 0, 0, 0.16);

  .certificate-wrapper {
    @include centerColumn;
    font-size: $xsmall;
    height: 100%;
    width: 30%;

    .certificate-span {
      @include centerColumn;
      height: 2.5rem;
      font-weight: bold;
      color: rgba($White100, 0.88);
      text-shadow: 0 4px 12px rgba(0, 0, 0, 0.16);
    }
  }
}
</style>
