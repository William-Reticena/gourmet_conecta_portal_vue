<script setup lang="ts">
import CallMadeIcon from '@/assets/icons/CallMade.vue'
import { onMounted, ref } from 'vue'

const menuItemRef = ref<HTMLDivElement | null>(null)

const observer = new ResizeObserver((entries) => {
  if (entries[0].contentRect.width < 90) {
    entries[0].target.children[1].classList.add('hidden')
  } else {
    entries[0].target.children[1].classList.remove('hidden')
  }
})

onMounted(() => {
  if (menuItemRef.value) {
    observer.observe(menuItemRef.value, { box: 'content-box' })
  }
})
</script>

<template>
  <div ref="menuItemRef" class="menu-item-container">
    <div class="menu-item-icon">
      <CallMadeIcon />
    </div>
    <div class="menu-item-label">Chamadas Recebidas</div>
  </div>
</template>

<style scoped>
.menu-item-container {
  align-items: center;
  cursor: pointer;
  display: flex;
  padding: 0.5rem 1rem;
}

.menu-item-icon {
  margin-right: 0.5rem;
}

.menu-item-label {
  display: block;
}

.menu-item-label.hidden {
  display: none;
}
</style>
