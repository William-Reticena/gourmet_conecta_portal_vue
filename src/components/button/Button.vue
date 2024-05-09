<script setup lang="ts">
import { buttonProps } from './props'

defineProps(buttonProps)
</script>

<template>
  <button class="button" :type="type">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  background-color: #212121;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 0.625rem;
  transition: background-color var(--animation-duration);
}

.button:hover {
  background-color: #2c2c2c;
}
</style>
