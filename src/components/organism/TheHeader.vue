<script setup lang="ts"></script>

<template>
  <header class="the-header-wrapper">
    <div class="header-logo-wrapper">
      <div class="logo-item">Codemodel6</div>
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
    width: 30%;
    height: 100%;
    margin-left: 5%;

    .logo-item {
      background-color: orange;
      height: 100%;
      width: 30%;
      margin-right: 5%;
    }

    .text-item {
      @include centerColumn;
      background-color: red;
      height: 100%;
      width: 70%;
      font-family: var(--dunggeunmo-font);
    }
  }

  .header-menu-wrapper {
    @include aroundRow;
    width: 40%;
    height: 100%;
    background-color: blue;

    .menu-item {
      font-size: $small;
      cursor: pointer;
      background-color: transparent;
      font-family: var(--dunggeunmo-font);
    }
  }
}
</style>
