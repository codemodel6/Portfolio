<script setup lang="ts"></script>

<template>
  <div class="career-list-wrapper">
    <div class="career-list-title">VMS</div>
    <div class="career-list-contents">VMS 내용을 길게 쓸껍니다</div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.career-list-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 85%;
  height: 85%;
  background-color: orange;

  .career-list-title {
    height: 20%;
    font-weight: bold;
    font-size: $xlarge;
  }

  .career-list-contents {
    height: 80%;
    background-color: green;
    font-size: $small;
  }
}
</style>
