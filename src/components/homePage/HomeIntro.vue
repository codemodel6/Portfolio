<script setup lang="ts"></script>

<template>
  <div class="home-info-title">
    <div class="info-title">김경배는 누구인가요?</div>
    <div class="info-contents">어쩌구 저쩌구</div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.home-info-title {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30%;

  .info-title {
    font-size: $large;
    font-weight: bold;
    height: 20%;
  }

  .info-contents {
    background-color: orange;
    width: 80%;
    font-size: $small;
    height: 80%;
  }
}
</style>
