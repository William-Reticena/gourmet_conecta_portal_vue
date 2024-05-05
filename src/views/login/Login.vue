<script setup lang="ts">
import { ref } from 'vue'
import Box from '@components/box/Box.vue'
import Button from '@components/button/Button.vue'
import Card from '@components/card/Card.vue'
import Form from '@components/form/Form.vue'
import Image from '@components/img/Img.vue'
import Input from '@components/input/Input.vue'
import Typography from '@components/typography/Typography.vue'
import { RouteName } from '@utils/enums'

import Logo from '@assets/imgs/logo.png'

const email = ref('Hello World!')
const password = ref('')
</script>

<template>
  <Box class="login-form">
    <Card class="card-form" width="400px">
      <Box class="logo">
        <Image :src="Logo" alt="Logo" :width="250" border-radius="50%" />
        <!-- /src/assets/imgs/logo.png -->
        <!-- <img :src="" alt="Logo" :width="250" border-radius="50%" /> -->
      </Box>

      <Typography variant="h4" align="center">Entrar</Typography>

      <Form @submit="$router.push({ name: RouteName.HOME })">
        <Box class="form-container">
          <Input v-model="email" placeholder="Digite o seu e-mail" label="Teste" />
          <Input v-model="password" placeholder="Digite a sua senha" />

          <Button type="submit">Entrar</Button>
        </Box>
      </Form>
    </Card>
  </Box>
</template>

<style scoped>
.login-form {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
}

.card-form {
  padding: 2rem;
}

.logo {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
