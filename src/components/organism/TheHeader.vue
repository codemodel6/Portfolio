<script setup lang="ts"></script>

<template>
  <header class="the-header-wrapper"></header>
</template>

<style lang="scss">
@import '@/assets/styles/color/ColorNote.scss';

.the-header-wrapper {
  background-color: $Sub100;
  z-index: 100;
  position: fixed;
  width: 100%;
  border-bottom: 2px solid $Primary100;
  height: 90px;
}
</style>
