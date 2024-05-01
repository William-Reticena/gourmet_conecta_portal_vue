<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { typographyPProps } from './props'

const typographyPRef = ref<HTMLDivElement | null>(null)

const props = defineProps(typographyPProps)

onMounted(() => {
  if (typographyPRef.value) {
    if (props.noWrap) {
      typographyPRef.value.classList.add('no-wrap')
    }
  }
})
</script>

<template>
  <p ref="typographyPRef" class="typography-p">
    <slot></slot>
  </p>
</template>

<style scoped>
.typography-p {
  margin: 0;
  word-wrap: break-word;
}

.typography-p.no-wrap {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
