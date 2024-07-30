<script setup lang="ts">
const hi = '1'
</script>

<template lang="">
  <div class="global-first-block">
    <div class="marquee">
      <div>
        <span>방문을 환영합니다!</span>
        <span>방문을 환영합니다!</span>
        <span>방문을 환영합니다!</span>
        <span>방문을 환영합니다!</span>
      </div>
    </div>
    <div>{{ hi }}</div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalBlock.scss';
@import '@/assets/styles/color/ColorNote.scss';

.marquee {
  height: 30px;
  width: 100%;
  overflow: hidden;
  position: relative;
  border-bottom: 3px solid $Primary100;
}

.marquee div {
  display: flex;
  width: 200%;
  height: 30px;
  position: absolute;
  overflow: hidden;
  animation: marquee 20s linear infinite;
}

.marquee span {
  display: flex;
  align-items: center;
  float: left;
  width: 25%;
  font-weight: bold;
  height: 100%;
}

@keyframes marquee {
  0% {
    left: 0;
  }
  100% {
    left: -100%;
  }
}
</style>
