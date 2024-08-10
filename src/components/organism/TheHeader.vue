<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const introRoute = computed(() => route.path === '/') // 인트로 페이지일 경우 보여주지 않음
</script>

<template>
  <header class="the-header-wrapper" v-if="!introRoute">
    <div class="header-logo-wrapper">
      <button class="logo-item">Codemodel6</button>
      <div class="text-item">
        This is Front-End developer KimKyungBae portfolio. I write readable codes with
        responsibility and aim for clear communication
      </div>
    </div>
    <div class="header-menu-wrapper">
      <button class="menu-item">Intro</button>
      <button class="menu-item">Education</button>
      <button class="menu-item">Career</button>
      <button class="menu-item">Project</button>
    </div>
  </header>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.the-header-wrapper {
  @include betweenRow;
  background-color: $Sub100;
  z-index: 100;
  position: fixed;
  width: 100%;
  border-bottom: 2px solid $Primary100;
  height: 90px;

  .header-logo-wrapper {
    @include betweenRow;
    width: 40%;
    height: 100%;
    margin-left: 5%;

    .logo-item {
      @include centerColumn;
      background-color: black;
      color: white;
      height: 50%;
      width: 40%;
      font-size: $large;
      margin-right: 5%;
      font-family: var(--dunggeunmo-font);
    }

    .text-item {
      @include centerColumn;
      height: 100%;
      width: 60%;
      font-size: $xxsmall;
      font-family: var(--dunggeunmo-font);
    }
  }

  .header-menu-wrapper {
    @include aroundRow;
    width: 40%;
    height: 100%;

    .menu-item {
      font-size: $xmedium;
      cursor: pointer;
      background-color: transparent;
      font-family: var(--dunggeunmo-font);
    }
  }
}
</style>
