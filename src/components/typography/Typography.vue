<script setup lang="ts">
import { typographyProps } from './props'
import TypographyP from './components/typographyP/TypographyP.vue'

defineProps(typographyProps)
</script>

<template lang="html">
  <template v-if="variant === 'body1'">
    <TypographyP :no-wrap="noWrap">
      <slot></slot>
    </TypographyP>
  </template>
</template>

<style scoped></style>
