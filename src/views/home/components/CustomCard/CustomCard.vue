<script setup lang="ts">
import { RouteName } from '@utils/enums'
import Card from '@components/card/Card.vue'
import CustomImgHeader from './components/CustomImgHeader.vue'
import Typography from '@components/typography/Typography.vue'
</script>

<template>
  <template v-for="n in 80" :key="n">
    <Card @click="$router.push({ name: RouteName.RESTAURANT, params: { id: n } })">
      <CustomImgHeader />

      <template #section>
        <Typography variant="h6"> Restaurante {{ n }} </Typography>

        <div>
          <p>Rua de monçambique 123, Paraná</p>
          <p>Pedido min. R$ 40,00 R$ 10-20</p>
          <p>40-50 min</p>
        </div>
      </template>
    </Card>
  </template>
</template>

<style scoped></style>
