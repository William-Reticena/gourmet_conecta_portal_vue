<script setup lang="ts">
import { typographyProps } from './props'
import TypographyP from './components/typographyP/TypographyP.vue'
import TypographyH1 from './components/typographyH1/TypographyH1.vue'
import TypographyH4 from './components/typographyH4/TypographyH4.vue'
import TypographyH6 from './components/typographyH6/TypographyH6.vue'

defineProps(typographyProps)
</script>

<template lang="html">
  <template v-if="variant === 'body1' || variant === 'body2'">
    <TypographyP :no-wrap="noWrap" :variant="variant">
      <slot></slot>
    </TypographyP>
  </template>

  <template v-else-if="variant === 'h1'">
    <TypographyH1 :no-wrap="noWrap">
      <slot></slot>
    </TypographyH1>
  </template>

  <template v-else-if="variant === 'h4'">
    <TypographyH4 :no-wrap="noWrap" :align="align">
      <slot></slot>
    </TypographyH4>
  </template>

  <template v-else-if="variant === 'h6'">
    <TypographyH6 :no-wrap="noWrap">
      <slot></slot>
    </TypographyH6>
  </template>
</template>

<style scoped></style>
