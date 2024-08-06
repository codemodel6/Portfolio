<script setup lang="ts">
import TheFooter from './components/organism/TheFooter.vue'
import TheHeader from './components/organism/TheHeader.vue'
</script>

<template>
  <div id="app">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<style scoped></style>
