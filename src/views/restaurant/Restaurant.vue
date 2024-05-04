<script setup lang="ts">
import { useRoute } from 'vue-router'
import { RouteName } from '@utils/enums'
import Card from '@/components/card/Card.vue'

const {
  params: { id },
} = useRoute()
</script>

<template>
  <div class="restaurant">
    <div style="display: flex">
      <h1>Restaurante {{ id }}</h1>

      <div>
        <p>Rua de monçambique 123, Paraná</p>
        <p>Pedido min. R$ 40,00 R$ 10-20</p>
        <p>40-50 min</p>
      </div>
    </div>

    <div class="container">
      <Card class="card">
        <div @click="$router.push({ name: RouteName.HOME })">Voltar</div>

        <div class="img">
          <img src="@/assets/imgs/prato_de_comida.jpeg" width="100%" height="300px" alt="" />

          <h1>Marmita do dia</h1>

          <h2>Ingredientes:</h2>

          <ul>
            <li>Feijão</li>
            <li>Arroz</li>
            <li>Carne</li>
            <li>Salada</li>
            <li>Farofa</li>
            <li>Macarrão</li>
          </ul>

          <h2>Descrição:</h2>

          <p>Prato feito com ingredientes frescos e selecionados.</p>
        </div>
      </Card>

      <div style="max-height: 50rem; overflow-y: auto">
        <h1>Pratos</h1>

        <Card v-for="n in 15" :key="n">
          <div class="prato">
            <img class="food" src="https://via.placeholder.com/50x50" alt="" />

            <div>
              <h2>Prato {{ n }}</h2>
              <p>Descrição do prato {{ n }}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>

    <Card>
      <h1>Comentários</h1>

      <div>
        <h2>Usuário 1</h2>
        <p>Comida muito boa, recomendo!</p>
      </div>

      <div>
        <h2>Usuário 2</h2>
        <p>Comida muito boa, recomendo!</p>
      </div>

      <div>
        <h2>Usuário 3</h2>
        <p>Comida muito boa, recomendo!</p>
      </div>
    </Card>
  </div>
</template>

<style scoped>
.restaurant {
  padding-left: 3.125rem;
}

.container {
  display: flex;
  gap: 2rem;
  justify-content: space-around;
}

.card {
  width: 60%;
  max-width: 20rem;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
}

.prato {
  align-items: center;
  display: flex;
  gap: 1rem;
}

img:not(.food) {
  border-radius: 1rem;
  object-fit: cover;
}

.food {
  border-radius: 1rem;
}

ul {
  padding: 0 2rem;
}
</style>
