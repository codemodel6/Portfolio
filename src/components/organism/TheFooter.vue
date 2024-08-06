<script setup lang="ts"></script>

<template>
  <div class="the-footer-wrapper">
    <div className="footer-contents">상호: (주)KBCompany | 대표자명: 김경배</div>
    <div className="footer-contents">
      연락처: 010-6625-0937 | 이메일: codemodel6@gmail.com | 제작: Vue, Typescript, Scss
    </div>
    <br />
    <div className="footer-contents">
      이용약관&nbsp;&nbsp;
      <div className="bold">개인정보처리방침</div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.the-footer-wrapper {
  @include centerColumn;
  background-color: $Black100;
  width: 100%;
  height: 180px;
  color: $White100;

  .footer-contents {
    @include centerRow;
    width: 50%;
    height: 25px;

    .bold {
      font-weight: bold;
    }
  }
}
</style>
