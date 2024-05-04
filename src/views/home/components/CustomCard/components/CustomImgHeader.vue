<script setup lang="ts">
import Img from '@components/img/Img.vue'
</script>

<template>
  <Img src="src/assets/imgs/restaurante_exemplo.jpeg" :height="100" />

  <Img src="src/assets/imgs/logo.jpeg" :height="50" class="img-logo" :border-radius="8" />
</template>

<style scoped>
.img-logo {
  left: 1.25rem;
  position: absolute;
  bottom: 7.5rem;
}
</style>
