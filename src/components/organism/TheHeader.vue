<script setup lang="ts">
import { handleScrollMove } from '@/function/scroll'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const introRoute = computed(() => route.path === '/') // 인트로 페이지일 경우 보여주지 않음

const handleNavigate = () => {
  router.push('/')
}
</script>

<template>
  <header class="the-header-wrapper" v-if="!introRoute">
    <div class="header-logo-wrapper">
      <button class="logo-item" @click="handleNavigate">Codemodel6</button>
      <div class="text-item">
        This is Front-End developer KimKyungBae portfolio. I write readable codes with
        responsibility and aim for clear communication
      </div>
    </div>
    <div class="header-menu-wrapper">
      <button class="menu-item" @click="handleScrollMove(0)">Intro</button>
      <button class="menu-item" @click="handleScrollMove(1050)">Career</button>
      <button class="menu-item" @click="handleScrollMove(1750)">Project</button>
      <button class="menu-item" @click="handleScrollMove(4400)">Education</button>
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

  @media (max-width: 768px) {
    @include centerRow;
  }

  .header-logo-wrapper {
    @include betweenRow;
    width: 40%;
    height: 100%;
    margin-left: 5%;

    @media (max-width: 768px) {
      @include centerRow;
      width: 60%;
      margin-left: 0%;
    }

    .logo-item {
      @include centerColumn;
      background-color: black;
      color: white;
      height: 50%;
      width: 40%;
      font-size: $large;
      margin-right: 5%;
      font-family: var(--dunggeunmo-font);

      @media (max-width: 768px) {
        width: 80%;
      }
    }

    .text-item {
      @include centerColumn;
      height: 100%;
      width: 60%;
      font-size: $xxsmall;
      font-family: var(--dunggeunmo-font);

      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  .header-menu-wrapper {
    @include aroundRow;
    width: 40%;
    height: 100%;

    @media (max-width: 768px) {
      display: none;
    }

    .menu-item {
      font-size: $xmedium;
      cursor: pointer;
      background-color: transparent;
      font-family: var(--dunggeunmo-font);
    }
  }
}
</style>
