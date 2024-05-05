<script setup lang="ts">
import { RouteName } from '@utils/enums'
import Box from '@components/box/Box.vue'
import Card from '@components/card/Card.vue'
import Typography from '@components/typography/Typography.vue'

import CustomImgHeader from './components/customImgHeader/CustomImgHeader.vue'
</script>

<template>
  <template v-for="n in 80" :key="n">
    <Card class="restaurant-card" @click="$router.push({ name: RouteName.RESTAURANT, params: { id: n } })">
      <CustomImgHeader />

      <template #section>
        <Typography variant="h6"> Restaurante {{ n }} </Typography>

        <Box>
          <Typography variant="body2">Rua de monçambique 123, Paraná</Typography>
          <Typography variant="body2">Pedido min. R$ 40,00 R$ 10-20</Typography>
          <Typography variant="body2">40-50 min</Typography>
        </Box>
      </template>
    </Card>
  </template>
</template>

<style scoped>
.restaurant-card {
  transition: scale var(--animation-duration), box-shadow var(--animation-duration);
}

.restaurant-card:hover {
  cursor: pointer;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.15);
  scale: 1.05;
}
</style>
