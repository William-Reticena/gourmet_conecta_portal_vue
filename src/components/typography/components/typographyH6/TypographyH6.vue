<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { typographyH6Props } from './props'

const typographyH6Ref = ref<HTMLDivElement | null>(null)

const props = defineProps(typographyH6Props)

onMounted(() => {
  if (typographyH6Ref.value) {
    if (props.noWrap) {
      typographyH6Ref.value.classList.add('no-wrap')
    }
  }
})
</script>

<template>
  <h6 ref="typographyH6Ref" class="typography-h6">
    <slot></slot>
  </h6>
</template>

<style scoped>
.typography-h6 {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
  margin: 0;
  word-wrap: break-word;
}

.typography-h6.no-wrap {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
