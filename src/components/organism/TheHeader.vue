<script setup lang="ts"></script>

<template>
  <div class="header-wrapper"></div>
</template>

<style lang="scss">
@import '../../assets/styles/color/ColorNote.scss';

.header-wrapper {
  background-color: $Sub100;
  z-index: 100;
  position: fixed;
  width: 100%;
  border-bottom: 3px solid $Primary100;
  height: 90px;
}
</style>
