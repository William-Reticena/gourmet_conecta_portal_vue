<script setup lang="ts">
import { inputBaseProps } from './props'

const model = defineModel({ required: true, type: String })
defineProps(inputBaseProps)
</script>

<template>
  <div class="input-base-container">
    <input class="input-base" type="text" :placeholder="placeholder" v-model="model" />
  </div>
</template>

<style scoped>
.input-base-container {
  width: 100%;
}

.input-base {
  background-color: transparent;
  border: none;
  color: inherit;
  font-family: inherit;
  min-width: 7.8125rem;
  outline: none;
  padding: 0.375rem 0;
  width: 100%;
}

.input-base::placeholder {
  /* color: var(--color-gray-500); */
}
</style>
