<script setup lang="ts">
import codemodel6 from '../../assets/styles/image/homeImg/codemodel6.jpg'
</script>

<template>
  <div class="home-title-wrapper">Drawing Rice</div>
  <div class="home-wrapper">
    <div class="home-image-wrapper">
      <img :src="codemodel6" :alt="codemodel6" />
    </div>
    <div class="home-intro-wrapper">
      <span class="intro-title">김경배</span>
      <span class="intro-sub-title">나는 누구인가</span>
      <div class="intro-skill"></div>
      <div class="intro-info"></div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.home-wrapper {
  @include betweenRow;
  width: 90%;
  height: 80%;
}

.home-title-wrapper {
  @include centerRow;
  height: 20%;
  width: 100%;
  font-size: $xxlarge;
  font-family: var(--shilla-font);
}

.home-image-wrapper {
  display: flex;
  justify-content: end;
  width: 45%;
  height: 100%;
  background-color: blue;

  img {
    width: 30rem;
    height: 30rem;
    border-radius: 50%;
  }
}

.home-intro-wrapper {
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 100%;
  background-color: yellow;

  .intro-title {
    font-size: $xlarge;
    margin-bottom: 10px;
    background-color: orange;
  }

  .intro-sub-title {
    font-size: $medium;
    margin-bottom: 50px;
    background-color: red;
  }

  .intro-skill {
    background-color: green;
    width: 100%;
    height: 30%;
    margin-bottom: 50px;
  }

  .intro-info {
    background-color: purple;
    width: 100%;
    height: 30%;
  }
}
</style>
