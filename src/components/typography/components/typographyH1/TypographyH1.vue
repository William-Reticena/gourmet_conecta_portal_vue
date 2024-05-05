<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { typographyH1Props } from './props'

const typographyH1Ref = ref<HTMLDivElement | null>(null)

const props = defineProps(typographyH1Props)

onMounted(() => {
  if (typographyH1Ref.value) {
    if (props.noWrap) {
      typographyH1Ref.value.classList.add('no-wrap')
    }
  }
})
</script>

<template>
  <h6 ref="typographyH1Ref" class="typography-h1">
    <slot></slot>
  </h6>
</template>

<style scoped>
.typography-h1 {
  font-size: 6rem;
  font-weight: 300;
  line-height: 1.167;
  letter-spacing: -0.01562em;
  margin: 0;
  word-wrap: break-word;
}

.typography-h1.no-wrap {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
