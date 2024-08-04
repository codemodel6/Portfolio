<script setup lang="ts">
const props = defineProps<{
  infoColor: string
}>()

const styleObject = {
  '--info-color': props.infoColor
}
</script>

<template>
  <div class="home-project-info" :style="styleObject">
    <span class="project-title">뮤툰 (MewToon)</span>
    <span class="project-sub-title">웹툰 노래 추천 사이트</span>
    <span class="project-contents">
      뮤툰은 웹툰에 음악을 함께 들으면 생생함과 재미가 살아나는
      <br />아이디어를 토대로 만들어진 사이트입니다.
    </span>
    <span class="project-tool"> <span class="tool-name">[배포]</span> mewtoon.netlify.app</span>
    <span class="project-tool"> <span class="tool-name">[배포]</span> mewtoon.netlify.app</span>
    <span class="project-tool"> <span class="tool-name">[배포]</span> mewtoon.netlify.app</span>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.home-project-info {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  background-color: var(--info-color);
  padding-top: 8%;
  padding-left: 8%;
  color: white;

  .project-title {
    font-size: $xlarge;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .project-sub-title {
    font-size: $xsmall;
    margin-bottom: 30px;
  }

  .project-contents {
    font-size: $xsmall;
    margin-bottom: 30px;
  }

  .project-tool {
    font-size: $xsmall;

    .tool-name {
      font-weight: bold;
    }
  }
}
</style>
