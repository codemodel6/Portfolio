<script setup lang="ts"></script>

<template>
  <div class="global-half-block">
    <div class="home-intro-wrappe">
      <div class="intro-title">김경배는 누구인가요?</div>
      <div class="intro-contents">어쩌구 저쩌구</div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.home-intro-wrapper {
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;

  .intro-title {
    font-size: $large;
    font-weight: bold;
    height: 20%;
  }

  .intro-contents {
    background-color: orange;
    width: 80%;
    font-size: $small;
    height: 80%;
  }
}
</style>
