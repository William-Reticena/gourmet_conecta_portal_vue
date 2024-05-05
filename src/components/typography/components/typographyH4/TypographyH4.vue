<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { typographyH4Props } from './props'

const typographyH4Ref = ref<HTMLDivElement | null>(null)

const props = defineProps(typographyH4Props)

onMounted(() => {
  if (typographyH4Ref.value) {
    typographyH4Ref.value.style.textAlign = props.align

    if (props.noWrap) {
      typographyH4Ref.value.classList.add('no-wrap')
    }
  }
})
</script>

<template>
  <h6 ref="typographyH4Ref" class="typography-h4">
    <slot></slot>
  </h6>
</template>

<style scoped>
.typography-h4 {
  font-size: 2.125rem;
  font-weight: 400;
  line-height: 1.235;
  letter-spacing: 0.00735em;
  margin: 0;
  word-wrap: break-word;
}

.typography-h4.no-wrap {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
