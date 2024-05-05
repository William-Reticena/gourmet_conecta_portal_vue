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

    if (props.variant === 'body1') {
      typographyPRef.value.classList.add('body1')
    } else if (props.variant === 'body2') {
      typographyPRef.value.classList.add('body2')
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

.typography-p.body1 {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
}

.typography-p.body2 {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
}
</style>
