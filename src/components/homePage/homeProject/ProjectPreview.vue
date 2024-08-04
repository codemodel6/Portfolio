<script setup lang="ts">
import mewToon1 from '@/assets/styles/image/projectImg/mewToon1.gif'
import mewToon2 from '@/assets/styles/image/projectImg/mewToon2.gif'
</script>

<template>
  <div class="home-project-preview">
    <div class="project-block">
      <img :src="mewToon1" alt="첫번째 gif" />
      <span class="project-block-title">
        웹툰 정보를<br />
        빠르게 확인해보세요!</span
      >
    </div>
    <div class="project-block">
      <span class="project-block-title">
        재미있는 프로젝트를
        <br />
        즐겨보세요!</span
      >
      <img :src="mewToon2" alt="두번째 gif" />
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
    }

    img {
      width: 50%;
      height: 100%;
    }
  }
}
</style>
