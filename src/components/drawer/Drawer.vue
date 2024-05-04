<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue'
import { drawerProps } from './props'
import MenuItem from '../menuItem/MenuItem.vue'

const drawerRef = ref<HTMLDivElement | null>(null)

const model = defineModel({ type: Boolean, default: false })
const props = defineProps(drawerProps)

onMounted(() => {
  if (drawerRef.value) {
    drawerRef.value.classList.add(`side-${props.side}`)

    drawerRef.value.addEventListener('click', () => {
      model.value = true
    })

    drawerRef.value.addEventListener('blur', () => {
      model.value = false
    })

    if (!model.value) {
      drawerRef.value.classList.add('mini-mode')
    } else {
      drawerRef.value.classList.remove('mini-mode')
    }
  }
})

onUpdated(() => {
  if (drawerRef.value) {
    if (!model.value) {
      drawerRef.value.classList.add('mini-mode')
    } else {
      drawerRef.value.classList.remove('mini-mode')
    }
  }
})
</script>

<template>
  <div ref="drawerRef" class="drawer-container" tabindex="-1">
    <MenuItem> Ver restaurantes </MenuItem>
    <MenuItem> Meus pedidos </MenuItem>
    <MenuItem> Virar Premium </MenuItem>
  </div>
</template>

<style scoped>
.drawer-container {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  position: fixed;
  top: 0;
  transition: width var(--animation-duration);
  width: 15.625rem;
  z-index: 1000;
}

.side-left {
  left: 0;
}

.side-right {
  right: 0;
}

.drawer-container.mini-mode {
  width: 3.125rem;
}
</style>
