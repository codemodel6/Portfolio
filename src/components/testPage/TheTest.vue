<script setup lang="ts"></script>

<template>
  <div class="test-wrapper">
    <div class="test-item-wrapper">
      <div class="test-block1"></div>
      <div class="test-block2"></div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.test-wrapper {
  @include centerRow;
  width: 100%;
  height: 700px;
}

.test-item-wrapper {
  display: flex;
  width: 90%;
  height: 100%;

  .test-block1 {
    position: relative;
    width: 50%;
    height: 100%;
    background-color: red;

    animation: bounce-left 1.3s ease-in-out forwards;
  }

  .test-block2 {
    position: relative;
    width: 50%;
    height: 100%;
    background-color: blue;
    animation: bounce-right 1.3s ease-in-out forwards;
  }
}
</style>
