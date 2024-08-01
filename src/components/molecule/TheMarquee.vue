<script setup lang="ts"></script>

<template>
  <div class="marquee">
    <div>
      <span>Welocme</span>
      <span>Welocme</span>
      <span>Welocme</span>
      <span>Welocme</span>
    </div>
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
  animation: marquee 25s linear infinite;
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
    right: 0;
  }
  100% {
    right: -100%;
  }
}
</style>
