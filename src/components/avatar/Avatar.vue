<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { avatarProps } from './props'

const props = defineProps(avatarProps)

const avatarRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (avatarRef.value) {
    avatarRef.value.classList.add(props.size)
  }
})
</script>

<template>
  <div ref="avatarRef" class="image-container">
    <img :src="src" alt="Avatar" />
  </div>
</template>

<style scoped>
.image-container {
  border-radius: 50%;
  overflow: hidden;
}

.image-container img {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.image-container.small {
  height: 2.5rem;
  width: 2.5rem;
}

.image-container.medium {
  height: 3.125rem;
  width: 3.125rem;
}

.image-container.large {
  height: 3.75rem;
  width: 3.75rem;
}
</style>
