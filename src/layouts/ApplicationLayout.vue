<script setup lang="ts">
import { ref } from 'vue'
import Drawer from '@/components/drawer/Drawer.vue'

const isOpen = ref(false)
</script>

<template>
  <div>
    <Drawer v-model="isOpen" />

    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>
