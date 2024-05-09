<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue'
import { drawerProps } from './props'

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
    <slot></slot>
  </div>
</template>

<style scoped>
.drawer-container {
  backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 0 10px 10px 0;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
  height: calc(100vh - var(--content-viewing-padding-top));
  position: fixed;
  top: var(--content-viewing-padding-top);
  transition: width var(--animation-duration);
  width: 15.625rem;
  z-index: 1000;
}

.drawer-container:first-child {
  margin-top: 50px;
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
