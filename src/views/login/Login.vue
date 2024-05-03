<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/button/Button.vue'
import Card from '@/components/card/Card.vue'
import Form from '@/components/form/Form.vue'
import Input from '@/components/input/Input.vue'
import Typography from '@/components/typography/Typography.vue'

const email = ref('Hello World!')
const password = ref('')
</script>

<template>
  <Card max-width="600px">
    <Form @submit="$router.push({ name: 'home' })">
      <Input v-model="email" placeholder="Digite o seu e-mail" label="Teste" />
      <Input v-model="password" placeholder="Digite a sua senha" />
      <Typography>{{ email }}</Typography>
      <Typography>{{ password }}</Typography>

      <Button type="submit">Entrar</Button>
    </Form>
  </Card>
</template>

<style scoped></style>
