<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const introRoute = computed(() => route.path === '/') // 인트로 페이지일 경우 보여주지 않음
</script>

<template>
  <div class="the-footer-wrapper" v-if="!introRoute">
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
  font-size: $small;

  .footer-contents {
    @include centerRow;
    width: 50%;
    height: 15%;

    .bold {
      font-weight: bold;
    }
  }
}
</style>
