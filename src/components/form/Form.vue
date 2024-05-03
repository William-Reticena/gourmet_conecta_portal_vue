<script setup lang="ts">
import { formEmits } from './props'

const emit = defineEmits(formEmits)

const handleSubmit = () => {
  emit('submit')
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <slot></slot>
  </form>
</template>

<style scoped></style>
