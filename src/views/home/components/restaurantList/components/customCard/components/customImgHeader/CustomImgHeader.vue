<script setup lang="ts">
import Box from '@components/box/Box.vue'
import Img from '@components/img/Img.vue'

import RestaurantImg from '@assets/imgs/restaurante_exemplo.jpeg'
import RestaurantLogo from '@assets/imgs/restaurant_logo.jpeg'
</script>

<template>
  <Box class="box-content">
    <Img :src="RestaurantImg" :height="100" />

    <Img :src="RestaurantLogo" :height="50" class="img-logo" border-radius="8px" />
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
