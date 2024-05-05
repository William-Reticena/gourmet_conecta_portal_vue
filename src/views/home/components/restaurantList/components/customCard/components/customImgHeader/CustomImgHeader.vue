<script setup lang="ts">
import Box from '@components/box/Box.vue'
import Img from '@components/img/Img.vue'
</script>

<template>
  <Box class="box-content">
    <Img src="src/assets/imgs/restaurante_exemplo.jpeg" :height="100" />

    <Img src="src/assets/imgs/restaurant_logo.jpeg" :height="50" class="img-logo" border-radius="8px" />
  </Box>
</template>

<style scoped>
.box-content {
  position: relative;
}

.img-logo {
  left: 1rem;
  bottom: -1rem;
  position: absolute;
}
</style>
