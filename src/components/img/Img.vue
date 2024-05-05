<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ImgProps } from './props'

const props = defineProps(ImgProps)

const imgRef = ref<HTMLImageElement | null>(null)

onMounted(() => {
  if (imgRef.value) {
    if (props.borderRadius) {
      imgRef.value.style.borderRadius = String(props.borderRadius)
    }
  }
})
</script>

<template>
  <div class="img-container">
    <img ref="imgRef" :src="src" :alt="alt" :height="height" :width="height && !width ? '100%' : width" />
  </div>
</template>

<style scoped>
img {
  object-fit: cover;
}
</style>
