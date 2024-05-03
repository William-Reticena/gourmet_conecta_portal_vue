<script setup lang="ts">
import Drawer from '@/components/drawer/Drawer.vue'
import { ref } from 'vue'

const isOpen = ref(true)
</script>

<template>
  <div>
    <Drawer v-model="isOpen" />

    <button @click="isOpen = !isOpen">Toggle Drawer</button>
  </div>
</template>

<style scoped>
button {
  margin: 0 0 0 50rem;
}
</style>
