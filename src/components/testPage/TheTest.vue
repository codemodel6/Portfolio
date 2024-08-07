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

  @keyframes bounce-right {
    0% {
      right: -55%;
    }

    70% {
      right: 0%;
    }

    80% {
      right: -3%;
    }

    90% {
      right: 0%;
    }

    95% {
      right: -1%;
    }

    100% {
      right: 0%;
    }
  }

  @keyframes bounce-left {
    0% {
      left: -55%;
    }

    70% {
      left: 0%;
    }

    80% {
      left: -3%;
    }

    90% {
      left: 0%;
    }

    95% {
      left: -1%;
    }

    100% {
      left: 0%;
    }
  }
}
</style>
