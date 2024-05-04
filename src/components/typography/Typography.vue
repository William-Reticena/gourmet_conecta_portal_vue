<script setup lang="ts">
import { typographyProps } from './props'
import TypographyP from './components/typographyP/TypographyP.vue'
import TypographyH6 from './components/typographyH6/TypographyH6.vue'

defineProps(typographyProps)
</script>

<template lang="html">
  <template v-if="variant === 'body1'">
    <TypographyP :no-wrap="noWrap">
      <slot></slot>
    </TypographyP>
  </template>
  <template v-else-if="variant === 'h6'">
    <TypographyH6 :no-wrap="noWrap">
      <slot></slot>
    </TypographyH6>
  </template>
</template>

<style scoped></style>
