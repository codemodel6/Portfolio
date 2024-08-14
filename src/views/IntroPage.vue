<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

onMounted(() => {
  const router = useRouter()

  // 6초 후 홈으로 이동
  setTimeout(() => {
    router.push('/home')
  }, 7000)
})
</script>

<template>
  <div class="intro-page-wrapper">
    <div class="intro-span-wrapper">
      <p>C</p>
      <p>o</p>
      <p>d</p>
      <p>e</p>
      <p>m</p>
      <p>o</p>
      <p>d</p>
      <p>e</p>
      <p>l</p>
      <p>6</p>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.intro-page-wrapper {
  height: 100vh;
  min-width: 100vh;
  width: 100%;
  background-color: black;
  color: white;

  .intro-span-wrapper {
    position: absolute;
    height: 10%;
    width: 40%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      height: 5%;
      background-color: white;
      animation: underline-animation 1.5s ease 3s forwards;
      animation-delay: 4.5s;
    }

    p {
      position: absolute;
      font-size: $intro-font;
      top: 50%;
      transform: translate(-50%, -50%);
      animation-fill-mode: forwards;

      @media (max-width: 768px) {
        font-size: $intro-mobile-font;
      }
    }
  }
}

// 각 span의 left값과 animation delay 설정
@for $i from 1 through 10 {
  p:nth-child(#{$i}) {
    left: 5% + (($i - 1) * 10%);
    @if $i == 1 {
      animation: rotate-word 3s ease-out;
    } @else {
      opacity: 0;
      animation: opacity-word 1s ease-in-out;
      animation-delay: 3s + ($i * 0.1s);
      transform: scaleX(0);
    }
  }
}

@keyframes rotate-word {
  0% {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  70% {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotateY(1080deg);
  }

  100% {
    top: 50%;
    left: 5%;
    transform: translate(-50%, -50%) rotateY(1080deg);
  }
}

@keyframes opacity-word {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes underline-animation {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
