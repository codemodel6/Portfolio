<script setup lang="ts">
import codemodel6 from '../../../assets/styles/image/homeImg/codemodel6.jpg'
import TheMarquee from '../../molecule/TheMarquee.vue'
import TheTitle from '../../molecule/TheTitle.vue'
import skill from '../../../assets/styles/image/homeImg/skill.png'
import github from '../../../assets/styles/image/homeImg/github.jpg'
import velog from '../../../assets/styles/image/homeImg/velog.jpg'
import gmail from '../../../assets/styles/image/homeImg/gmail.jpg'
import phone from '../../../assets/styles/image/homeImg/phone.jpg'
</script>

<template>
  <div class="global-full-block">
    <TheMarquee />
    <TheTitle title="Frontend Developer" />
    <div class="home-main-wrapper">
      <div class="main-image-wrapper">
        <img :src="codemodel6" :alt="codemodel6" />
      </div>
      <div class="main-intro-wrapper">
        <div class="main-title-wrapper">
          <span class="title-name">김경배</span>
          <span class="title-birth">1998.04.21.</span>
        </div>
        <span class="main-sub-title"
          >코드 품질, 커뮤니케이션, 책임감을 중요시 여기는<br />프론트엔드 개발자 입니다</span
        >
        <img class="main-skill-img" :src="skill" />
        <div class="main-info">
          <div class="main-line">
            <img :src="github" alt="github" />
            <a class="main-link" href="https://github.com/codemodel6"
              >https://github.com/codemodel6</a
            >
          </div>
          <div class="main-line">
            <img :src="velog" alt="velog" />
            <a class="main-link" href="https://github.com/codemodel6"
              >https://velog.io/@codemodel6</a
            >
          </div>
          <div class="main-line">
            <img :src="gmail" alt="gmail" />
            <a class="main-link" href="https://github.com/codemodel6"> codemodel6@gmail.com</a>
          </div>
          <div class="main-line">
            <img :src="phone" alt="phone" />
            <span class="main-link">010 6625 0937</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.home-main-wrapper {
  @include betweenRow;
  width: 90%;
  height: 80%;

  @media (max-width: 768px) {
    @include centerColumn;
  }
}

.main-image-wrapper {
  display: flex;
  justify-content: end;
  width: 43%;
  height: 100%;

  @media (max-width: 768px) {
    justify-content: center;
  }

  img {
    margin-top: 5%;
    margin-right: 3%;
    width: 48%;
    height: 65%;
    border-radius: 50%;

    @media (max-width: 768px) {
      width: 90%;
      height: 75%;
    }
  }
}

.main-intro-wrapper {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    width: 70%;
    @include centerColumn;
  }

  .main-title-wrapper {
    margin-bottom: 15px;

    .title-name {
      font-size: $xlarge;
      font-weight: bold;
      margin-right: 20px;
    }

    .title-birth {
      font-size: $medium;
      font-weight: bold;
    }
  }

  .main-sub-title {
    font-size: $small;
    margin-bottom: 30px;
    white-space: pre-line;
  }

  .main-skill-img {
    width: 80%;
    height: 45%;
    margin-bottom: 30px;
  }

  .main-info {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: $Primary100;
    color: $Sub100;
    width: 80%;
    height: 17%;
    padding: 0.4vw;
    border-radius: 10px;

    @media (max-width: 1024px) {
      width: 100%;
      flex-direction: column;
      flex-wrap: nowrap;
    }

    .main-line {
      display: flex;
      align-items: center;
      width: 48%;
      height: 30%;

      img {
        width: 10%;
        height: 100%;
        border-radius: 50%;
      }

      .main-link {
        margin-left: 0.8vw;
        font-size: $xxsmall;
      }
    }
  }
}
</style>
