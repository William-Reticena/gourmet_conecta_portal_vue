<script setup lang="ts">
import { buttonProps } from './props'

defineProps(buttonProps)
</script>

<template>
  <button :type="type">
    <slot></slot>
  </button>
</template>

<style scoped></style>
