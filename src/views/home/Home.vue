<script setup lang="ts">
import { RouteName } from '@utils/enums'
import Card from '@/components/card/Card.vue'
</script>

<template>
  <div class="home">
    <template v-for="n in 80" :key="n">
      <Card @click="$router.push({ name: RouteName.RESTAURANT, params: { id: n } })">
        <img src="@/assets/imgs/restaurante_exemplo.jpeg" alt="restaurante" />

        <img src="@/assets/imgs/logo.jpeg" alt="" class="logo-img" />
        <section>
          <h1>Restaurante 1</h1>

          <div>
            <p>Rua de monçambique 123, Paraná</p>
            <p>Pedido min. R$ 40,00 R$ 10-20</p>
            <p>40-50 min</p>
          </div>
        </section>
      </Card>
    </template>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding-left: 3.125rem;
}

.logo-img {
  border-radius: 8px;
  left: 1.25rem;
  height: 3.125rem;
  position: absolute;
  bottom: 7rem;
  width: 3.125rem;
}
</style>
